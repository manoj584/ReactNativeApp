import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const JSXScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>JSX in React Native</Text>

      <Text style={styles.body}>
        JSX is a syntax extension for JavaScript. It allows you to write
        HTML-like structures within JavaScript code, which React Native converts
        into JavaScript function calls.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
const element = <Text>Hello, JSX!</Text>;
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example,{" "}
        <Text style={styles.bold}>{"<Text>Hello, JSX!</Text>"}</Text> is a JSX
        element that renders text to the screen. JSX tags can be nested, styled,
        and include JavaScript expressions.
      </Text>

      {/* JSX Practical Example */}
      <Text style={styles.subHeader}>JSX Practical Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
const MyComponent = () => {
  const name = "React Native";
  return (
    <View>
      <Text style={{ color: "blue" }}>Welcome to {name}!</Text>
    </View>
  );
};
        `}</Text>
      </View>
      <Text style={styles.body}>
        Here, we use <Text style={styles.bold}>{"{name}"}</Text> to dynamically
        insert JavaScript variables in JSX. The text "Welcome to React Native!"
        would render in blue because of the inline style.
      </Text>
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
  text: {
    fontSize: 24,
    color: "rgb(246,247,249)",
    marginBottom: 20,
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    color: "rgb(180,180,180)",
    marginBottom: 20,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    color: "#61dafb",
    marginVertical: 15,
  },
  exampleBox: {
    width: "100%",
    backgroundColor: "#333840",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  code: {
    color: "rgb(246,247,249)",
    fontSize: 14,
    fontFamily: "monospace",
  },
  bold: {
    fontWeight: "bold",
    color: "#61dafb",
  },
});

export default JSXScreen;
