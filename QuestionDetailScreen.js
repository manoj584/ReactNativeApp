import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const QuestionDetailScreen = ({ route }) => {
  const { category, questions } = route.params; // Access the category and questions passed from the previous screen

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{category} Questions</Text>
      {questions.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(35,39,47)",
    padding: 20,
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#333840",
    borderRadius: 10,
    width: "100%",
    padding: 15,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    color: "#61dafb",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  answer: {
    fontSize: 14,
    color: "rgb(246,247,249)",
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default QuestionDetailScreen;
