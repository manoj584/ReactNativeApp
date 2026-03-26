import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const QuestionDetailScreen = ({ route }) => {
  const { category, questions } = route.params;

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerSection}>
        <Text style={styles.header}>{category} Questions</Text>
        <Text style={styles.subtitle}>{questions.length} questions to master</Text>
      </View>
      
      {questions.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.questionHeader}>
            <View style={styles.questionNumber}>
              <Text style={styles.questionNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.question}>{item.question}</Text>
          </View>
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#282c34",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  headerSection: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: "#a0a0a0",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "400",
  },
  card: {
    backgroundColor: "#3a3f47",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#4a5057",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  questionNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(97, 218, 251, 0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    flexShrink: 0,
  },
  questionNumberText: {
    fontSize: 14,
    color: "#61dafb",
    fontWeight: "700",
  },
  question: {
    flex: 1,
    fontSize: 17,
    color: "#61dafb",
    fontWeight: "700",
    lineHeight: 24,
  },
  answerContainer: {
    paddingLeft: 44,
    paddingTop: 8,
  },
  answer: {
    fontSize: 15,
    color: "#e0e0e0",
    lineHeight: 22,
    fontWeight: "400",
  },
});

export default QuestionDetailScreen;
