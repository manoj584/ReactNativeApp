import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { getRandomQuestions, getTotalQuestionCount } from "../data/quizQuestions";

const DIFFICULTIES = [
  { id: "easy", label: "Easy", color: "#5cb85c" },
  { id: "medium", label: "Medium", color: "#f0ad4e" },
  { id: "hard", label: "Hard", color: "#d9534f" },
  { id: "mixed", label: "Mixed", color: "#61dafb" },
];

const AMOUNTS = [5, 10, 15, 20];

const QuizScreen = () => {
  // Setup state
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed");
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [includeBonusRounds, setIncludeBonusRounds] = useState(true);

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fillAnswer, setFillAnswer] = useState("");
  const [codeAnswer, setCodeAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const totalQuestions = questions.length;
  const question = questions[currentQuestion];
  const progress = totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;
  const questionCounts = getTotalQuestionCount();

  const startQuiz = () => {
    const selected = getRandomQuestions(selectedAmount, selectedDifficulty, includeBonusRounds);
    setQuestions(selected);
    setQuizStarted(true);
  };

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const checkAnswer = () => {
    let correct = false;

    if (question.type === "mcq") {
      correct = selectedOption === question.correctAnswer;
    } else if (question.type === "fill") {
      correct =
        fillAnswer.trim().toLowerCase() ===
        question.correctAnswer.toLowerCase();
    } else if (question.type === "code") {
      const trimmed = codeAnswer.trim();
      correct = question.acceptableAnswers.some(
        (ans) => trimmed.replace(/\s+/g, " ") === ans.replace(/\s+/g, " ")
      );
    }

    if (correct) setScore((prev) => prev + 1);
    setIsCorrect(correct);
    setAnswered(true);
    setShowExplanation(true);
    setAnswers([...answers, { questionId: question.id, type: question.type, correct }]);
    fadeIn();
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setFillAnswer("");
      setCodeAnswer("");
      setShowExplanation(false);
      setAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setFillAnswer("");
    setCodeAnswer("");
    setScore(0);
    setShowExplanation(false);
    setAnswered(false);
    setIsCorrect(false);
    setQuizCompleted(false);
    setShowHint(false);
    setAnswers([]);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "mcq":
        return <FontAwesome name="list-ul" size={16} color="#61dafb" />;
      case "fill":
        return <MaterialCommunityIcons name="form-textbox" size={16} color="#f0ad4e" />;
      case "code":
        return <FontAwesome name="code" size={16} color="#5cb85c" />;
      default:
        return null;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "mcq":
        return "Multiple Choice";
      case "fill":
        return "Fill in the Blank";
      case "code":
        return "Write Code";
      default:
        return "";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "mcq":
        return "#61dafb";
      case "fill":
        return "#f0ad4e";
      case "code":
        return "#5cb85c";
      default:
        return "#ffffff";
    }
  };

  // ==================== SETUP SCREEN ====================
  if (!quizStarted) {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.setupContainer}>
        <View style={styles.setupHeader}>
          <MaterialCommunityIcons name="head-question" size={60} color="#61dafb" />
          <Text style={styles.setupTitle}>React & React Native Quiz</Text>
          <Text style={styles.setupSubtitle}>
            {questionCounts.total} questions across React JS & React Native
          </Text>
        </View>

        {/* Difficulty */}
        <Text style={styles.sectionLabel}>Difficulty</Text>
        <View style={styles.difficultyRow}>
          {DIFFICULTIES.map((diff) => (
            <TouchableOpacity
              key={diff.id}
              style={[
                styles.difficultyOption,
                { borderColor: diff.color },
                selectedDifficulty === diff.id && { backgroundColor: diff.color },
              ]}
              onPress={() => setSelectedDifficulty(diff.id)}
            >
              <Text
                style={[
                  styles.difficultyText,
                  { color: selectedDifficulty === diff.id ? "#20232a" : diff.color },
                ]}
              >
                {diff.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Number of Questions */}
        <Text style={styles.sectionLabel}>Number of Questions</Text>
        <View style={styles.difficultyRow}>
          {AMOUNTS.map((amt) => (
            <TouchableOpacity
              key={amt}
              style={[
                styles.amountOption,
                selectedAmount === amt && styles.amountOptionSelected,
              ]}
              onPress={() => setSelectedAmount(amt)}
            >
              <Text
                style={[
                  styles.amountText,
                  selectedAmount === amt && styles.amountTextSelected,
                ]}
              >
                {amt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bonus Rounds Toggle */}
        <TouchableOpacity
          style={styles.bonusToggle}
          onPress={() => setIncludeBonusRounds(!includeBonusRounds)}
        >
          <FontAwesome
            name={includeBonusRounds ? "check-square" : "square-o"}
            size={22}
            color={includeBonusRounds ? "#5cb85c" : "#666"}
          />
          <View style={styles.bonusToggleTextContainer}>
            <Text style={styles.bonusToggleLabel}>Include Bonus Rounds</Text>
            <Text style={styles.bonusToggleDesc}>
              Add fill-in-the-blank + coding challenges after MCQs
            </Text>
          </View>
        </TouchableOpacity>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={startQuiz}
        >
          <MaterialCommunityIcons name="play-circle" size={22} color="#20232a" />
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>

        <Text style={styles.apiCredit}>
          {questionCounts.mcq} MCQ + {questionCounts.fill} Fill-in-the-blank + {questionCounts.code} Coding questions
        </Text>
      </ScrollView>
    );
  }

  // ==================== RESULTS SCREEN ====================
  if (quizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    let grade = "";
    let gradeColor = "";
    if (percentage >= 90) {
      grade = "Excellent!";
      gradeColor = "#5cb85c";
    } else if (percentage >= 70) {
      grade = "Good Job!";
      gradeColor = "#61dafb";
    } else if (percentage >= 50) {
      grade = "Keep Practicing!";
      gradeColor = "#f0ad4e";
    } else {
      grade = "Need Improvement";
      gradeColor = "#d9534f";
    }

    const mcqCorrect = answers.filter((a) => a.type === "mcq" && a.correct).length;
    const mcqTotal = answers.filter((a) => a.type === "mcq").length;
    const fillCorrect = answers.filter((a) => a.type === "fill" && a.correct).length;
    const fillTotal = answers.filter((a) => a.type === "fill").length;
    const codeCorrectCount = answers.filter((a) => a.type === "code" && a.correct).length;
    const codeTotal = answers.filter((a) => a.type === "code").length;

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.resultsContainer}>
        <View style={styles.resultsCard}>
          <MaterialCommunityIcons
            name={percentage >= 70 ? "trophy" : "book-open-variant"}
            size={80}
            color={gradeColor}
          />
          <Text style={[styles.gradeText, { color: gradeColor }]}>{grade}</Text>
          <Text style={styles.scoreText}>
            {score} / {totalQuestions}
          </Text>
          <Text style={styles.percentageText}>{percentage}%</Text>

          {/* Score Breakdown */}
          <View style={styles.breakdownContainer}>
            <Text style={styles.breakdownTitle}>Score Breakdown</Text>

            {mcqTotal > 0 && (
              <View style={styles.breakdownRow}>
                <FontAwesome name="list-ul" size={16} color="#61dafb" />
                <Text style={styles.breakdownLabel}>Multiple Choice</Text>
                <Text style={styles.breakdownValue}>
                  {mcqCorrect} / {mcqTotal}
                </Text>
              </View>
            )}

            {fillTotal > 0 && (
              <View style={styles.breakdownRow}>
                <MaterialCommunityIcons name="form-textbox" size={16} color="#f0ad4e" />
                <Text style={styles.breakdownLabel}>Fill in the Blanks</Text>
                <Text style={styles.breakdownValue}>
                  {fillCorrect} / {fillTotal}
                </Text>
              </View>
            )}

            {codeTotal > 0 && (
              <View style={styles.breakdownRow}>
                <FontAwesome name="code" size={16} color="#5cb85c" />
                <Text style={styles.breakdownLabel}>Coding</Text>
                <Text style={styles.breakdownValue}>
                  {codeCorrectCount} / {codeTotal}
                </Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <MaterialCommunityIcons name="restart" size={20} color="#fff" />
            <Text style={styles.restartButtonText}>New Quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // ==================== QUIZ SCREEN ====================
  if (!question) return null;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} / {totalQuestions}
          </Text>
          <Text style={styles.scoreLabel}>Score: {score}</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      {/* Question Type Badge */}
      <View style={styles.badgeRow}>
        <View style={[styles.typeBadge, { borderColor: getTypeColor(question.type) }]}>
          {getTypeIcon(question.type)}
          <Text style={[styles.typeText, { color: getTypeColor(question.type) }]}>
            {getTypeLabel(question.type)}
          </Text>
        </View>
        {question.difficulty && (
          <View
            style={[
              styles.typeBadge,
              {
                borderColor:
                  question.difficulty === "easy"
                    ? "#5cb85c"
                    : question.difficulty === "medium"
                    ? "#f0ad4e"
                    : "#d9534f",
              },
            ]}
          >
            <Text
              style={[
                styles.typeText,
                {
                  color:
                    question.difficulty === "easy"
                      ? "#5cb85c"
                      : question.difficulty === "medium"
                      ? "#f0ad4e"
                      : "#d9534f",
                },
              ]}
            >
              {question.difficulty}
            </Text>
          </View>
        )}
      </View>

      {/* Question */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>

      {/* Hint Button (for bonus questions) */}
      {question.hint && !showHint && !answered && (
        <TouchableOpacity
          style={styles.hintButton}
          onPress={() => setShowHint(true)}
        >
          <FontAwesome name="lightbulb-o" size={16} color="#f0ad4e" />
          <Text style={styles.hintButtonText}>Show Hint</Text>
        </TouchableOpacity>
      )}

      {question.hint && showHint && !answered && (
        <View style={styles.hintCard}>
          <FontAwesome name="lightbulb-o" size={16} color="#f0ad4e" />
          <Text style={styles.hintText}>{question.hint}</Text>
        </View>
      )}

      {/* MCQ Options */}
      {question.type === "mcq" && (
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            let optionStyle = styles.optionButton;
            let textStyle = styles.optionText;

            if (answered) {
              if (index === question.correctAnswer) {
                optionStyle = [styles.optionButton, styles.correctOption];
                textStyle = [styles.optionText, styles.correctText];
              } else if (index === selectedOption && !isCorrect) {
                optionStyle = [styles.optionButton, styles.wrongOption];
                textStyle = [styles.optionText, styles.wrongText];
              }
            } else if (index === selectedOption) {
              optionStyle = [styles.optionButton, styles.selectedOption];
            }

            return (
              <TouchableOpacity
                key={index}
                style={optionStyle}
                onPress={() => !answered && setSelectedOption(index)}
                disabled={answered}
                activeOpacity={0.7}
              >
                <View style={styles.optionRow}>
                  <View style={styles.optionLetter}>
                    <Text style={styles.optionLetterText}>
                      {String.fromCharCode(65 + index)}
                    </Text>
                  </View>
                  <Text style={textStyle}>{option}</Text>
                  {answered && index === question.correctAnswer && (
                    <FontAwesome name="check-circle" size={20} color="#5cb85c" />
                  )}
                  {answered && index === selectedOption && !isCorrect && (
                    <FontAwesome name="times-circle" size={20} color="#d9534f" />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {/* Fill in the Blank */}
      {question.type === "fill" && (
        <View style={styles.fillContainer}>
          <TextInput
            style={[
              styles.fillInput,
              answered && isCorrect && styles.correctInput,
              answered && !isCorrect && styles.wrongInput,
            ]}
            placeholder="Type your answer..."
            placeholderTextColor="#666"
            value={fillAnswer}
            onChangeText={setFillAnswer}
            editable={!answered}
            autoCapitalize="none"
          />
          {answered && !isCorrect && (
            <Text style={styles.correctAnswerText}>
              Correct answer: {question.correctAnswer}
            </Text>
          )}
        </View>
      )}

      {/* Code Input */}
      {question.type === "code" && (
        <View style={styles.codeContainer}>
          <View style={styles.codeHeader}>
            <FontAwesome name="code" size={14} color="#5cb85c" />
            <Text style={styles.codeHeaderText}>Code Editor</Text>
          </View>
          <TextInput
            style={[
              styles.codeInput,
              answered && isCorrect && styles.correctInput,
              answered && !isCorrect && styles.wrongInput,
            ]}
            placeholder="Write your code here..."
            placeholderTextColor="#666"
            value={codeAnswer}
            onChangeText={setCodeAnswer}
            editable={!answered}
            multiline
            autoCapitalize="none"
            autoCorrect={false}
          />
          {answered && !isCorrect && (
            <View style={styles.correctCodeContainer}>
              <Text style={styles.correctCodeLabel}>Expected answer:</Text>
              <Text style={styles.correctCodeText}>{question.correctAnswer}</Text>
            </View>
          )}
        </View>
      )}

      {/* Explanation */}
      {showExplanation && (
        <Animated.View style={[styles.explanationCard, { opacity: fadeAnim }]}>
          <View style={styles.explanationHeader}>
            <FontAwesome
              name={isCorrect ? "check-circle" : "times-circle"}
              size={24}
              color={isCorrect ? "#5cb85c" : "#d9534f"}
            />
            <Text
              style={[
                styles.explanationTitle,
                { color: isCorrect ? "#5cb85c" : "#d9534f" },
              ]}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </Text>
          </View>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </Animated.View>
      )}

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        {!answered ? (
          <TouchableOpacity
            style={[
              styles.submitButton,
              (question.type === "mcq" && selectedOption === null) ||
              (question.type === "fill" && fillAnswer.trim() === "") ||
              (question.type === "code" && codeAnswer.trim() === "")
                ? styles.disabledButton
                : null,
            ]}
            onPress={checkAnswer}
            disabled={
              (question.type === "mcq" && selectedOption === null) ||
              (question.type === "fill" && fillAnswer.trim() === "") ||
              (question.type === "code" && codeAnswer.trim() === "")
            }
          >
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
            <Text style={styles.nextButtonText}>
              {currentQuestion + 1 < totalQuestions ? "Next Question" : "See Results"}
            </Text>
            <FontAwesome name="arrow-right" size={16} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#282c34",
    padding: 20,
    paddingBottom: 40,
  },
  // Progress
  progressContainer: {
    marginBottom: 20,
  },
  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressText: {
    color: "#b4b4b4",
    fontSize: 14,
    fontWeight: "600",
  },
  scoreLabel: {
    color: "#61dafb",
    fontSize: 14,
    fontWeight: "700",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#3a3f47",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#61dafb",
    borderRadius: 3,
  },
  // Type Badge
  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    gap: 6,
  },
  typeText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  // Question
  questionCard: {
    backgroundColor: "#3a3f47",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#4a5057",
  },
  questionText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 26,
  },
  // Hint
  hintButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  hintButtonText: {
    color: "#f0ad4e",
    fontSize: 13,
    fontWeight: "600",
  },
  hintCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(240, 173, 78, 0.1)",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(240, 173, 78, 0.3)",
  },
  hintText: {
    color: "#f0ad4e",
    fontSize: 14,
    flex: 1,
  },
  // MCQ Options
  optionsContainer: {
    gap: 10,
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: "#3a3f47",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#4a5057",
  },
  selectedOption: {
    borderColor: "#61dafb",
    backgroundColor: "rgba(97, 218, 251, 0.1)",
  },
  correctOption: {
    borderColor: "#5cb85c",
    backgroundColor: "rgba(92, 184, 92, 0.1)",
  },
  wrongOption: {
    borderColor: "#d9534f",
    backgroundColor: "rgba(217, 83, 79, 0.1)",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#4a5057",
    alignItems: "center",
    justifyContent: "center",
  },
  optionLetterText: {
    color: "#61dafb",
    fontSize: 14,
    fontWeight: "700",
  },
  optionText: {
    color: "#ffffff",
    fontSize: 15,
    flex: 1,
    fontWeight: "500",
  },
  correctText: {
    color: "#5cb85c",
  },
  wrongText: {
    color: "#d9534f",
  },
  // Fill in the Blank
  fillContainer: {
    marginBottom: 16,
  },
  fillInput: {
    backgroundColor: "#3a3f47",
    borderRadius: 12,
    padding: 16,
    color: "#ffffff",
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: "#4a5057",
  },
  correctInput: {
    borderColor: "#5cb85c",
    backgroundColor: "rgba(92, 184, 92, 0.1)",
  },
  wrongInput: {
    borderColor: "#d9534f",
    backgroundColor: "rgba(217, 83, 79, 0.1)",
  },
  correctAnswerText: {
    color: "#5cb85c",
    fontSize: 14,
    marginTop: 8,
    fontWeight: "600",
  },
  // Code Input
  codeContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "#4a5057",
  },
  codeHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1e2127",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  codeHeaderText: {
    color: "#5cb85c",
    fontSize: 13,
    fontWeight: "600",
  },
  codeInput: {
    backgroundColor: "#1e2127",
    padding: 16,
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "monospace",
    minHeight: 100,
    textAlignVertical: "top",
    borderWidth: 0,
  },
  correctCodeContainer: {
    backgroundColor: "rgba(92, 184, 92, 0.1)",
    padding: 12,
  },
  correctCodeLabel: {
    color: "#5cb85c",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 4,
  },
  correctCodeText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "monospace",
  },
  // Explanation
  explanationCard: {
    backgroundColor: "#3a3f47",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#4a5057",
  },
  explanationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  explanationText: {
    color: "#b4b4b4",
    fontSize: 14,
    lineHeight: 22,
  },
  // Action Buttons
  actionContainer: {
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: "#61dafb",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.4,
  },
  submitButtonText: {
    color: "#20232a",
    fontSize: 16,
    fontWeight: "700",
  },
  nextButton: {
    backgroundColor: "#5cb85c",
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  // Results
  resultsContainer: {
    flexGrow: 1,
    backgroundColor: "#282c34",
    padding: 20,
    justifyContent: "center",
  },
  resultsCard: {
    backgroundColor: "#3a3f47",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4a5057",
  },
  gradeText: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 16,
  },
  scoreText: {
    fontSize: 48,
    color: "#ffffff",
    fontWeight: "800",
    marginTop: 8,
  },
  percentageText: {
    fontSize: 20,
    color: "#b4b4b4",
    fontWeight: "600",
    marginTop: 4,
  },
  breakdownContainer: {
    width: "100%",
    marginTop: 24,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#4a5057",
  },
  breakdownTitle: {
    color: "#b4b4b4",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  breakdownRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
  },
  breakdownLabel: {
    flex: 1,
    color: "#b4b4b4",
    fontSize: 15,
  },
  breakdownValue: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  restartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#61dafb",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginTop: 24,
    gap: 8,
  },
  restartButtonText: {
    color: "#20232a",
    fontSize: 16,
    fontWeight: "700",
  },
  // Badge Row
  badgeRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
    flexWrap: "wrap",
  },
  // Setup Screen
  setupContainer: {
    flexGrow: 1,
    backgroundColor: "#282c34",
    padding: 20,
    paddingBottom: 40,
  },
  setupHeader: {
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 10,
  },
  setupTitle: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "800",
    marginTop: 12,
  },
  setupSubtitle: {
    fontSize: 14,
    color: "#b4b4b4",
    marginTop: 6,
  },
  sectionLabel: {
    color: "#61dafb",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 10,
    marginTop: 8,
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  setupOption: {
    backgroundColor: "#3a3f47",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: "#4a5057",
  },
  setupOptionSelected: {
    borderColor: "#61dafb",
    backgroundColor: "rgba(97, 218, 251, 0.15)",
  },
  setupOptionText: {
    color: "#b4b4b4",
    fontSize: 14,
    fontWeight: "600",
  },
  setupOptionTextSelected: {
    color: "#61dafb",
  },
  difficultyRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  difficultyOption: {
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1.5,
    backgroundColor: "transparent",
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: "700",
  },
  amountOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3a3f47",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#4a5057",
  },
  amountOptionSelected: {
    borderColor: "#61dafb",
    backgroundColor: "rgba(97, 218, 251, 0.15)",
  },
  amountText: {
    color: "#b4b4b4",
    fontSize: 16,
    fontWeight: "700",
  },
  amountTextSelected: {
    color: "#61dafb",
  },
  bonusToggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#3a3f47",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#4a5057",
  },
  bonusToggleTextContainer: {
    flex: 1,
  },
  bonusToggleLabel: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  bonusToggleDesc: {
    color: "#b4b4b4",
    fontSize: 12,
    marginTop: 2,
  },
  startButton: {
    backgroundColor: "#61dafb",
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  startButtonText: {
    color: "#20232a",
    fontSize: 18,
    fontWeight: "700",
  },
  apiCredit: {
    color: "#6c757d",
    fontSize: 12,
    textAlign: "center",
    marginTop: 16,
  },
});

export default QuizScreen;
