import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const PropsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Understanding Props in React Native</Text>

      <Text style={styles.body}>
        Props (short for "properties") allow components to communicate with each
        other by passing data from a parent component to a child component. This
        is one of the core concepts in React and React Native.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
const Greeting = ({ name }) => {
  return <Text>Hello, {name}!</Text>;
};

<Greeting name="John" />;
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example,{" "}
        <Text style={styles.bold}>{"<Greeting name='John' />"}</Text> is a
        component that receives the <Text style={styles.bold}>name</Text> prop
        and displays it inside a <Text style={styles.bold}>{"<Text>"}</Text>{" "}
        component.
      </Text>

      {/* Practical Example */}
      <Text style={styles.subHeader}>Practical Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
const WelcomeMessage = ({ name, age }) => {
  return (
    <View>
      <Text>Welcome, {name}!</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

<WelcomeMessage name="Alice" age={25} />;
        `}</Text>
      </View>
      <Text style={styles.body}>
        Here, the <Text style={styles.bold}>{"<WelcomeMessage>"}</Text>{" "}
        component takes two props: <Text style={styles.bold}>name</Text> and{" "}
        <Text style={styles.bold}>age</Text>. The component renders them as text
        on the screen. You can pass dynamic data to props from the parent
        component.
      </Text>

      {/* Example of how props can be used in nested components */}
      <Text style={styles.subHeader}>Nested Components with Props:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
const ParentComponent = () => {
  const message = "Hello from the parent!";
  return <ChildComponent message={message} />;
};

const ChildComponent = ({ message }) => {
  return <Text>{message}</Text>;
};

<ParentComponent />;
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example, <Text style={styles.bold}>{"ParentComponent"}</Text>{" "}
        passes a prop <Text style={styles.bold}>message</Text> to the{" "}
        <Text style={styles.bold}>ChildComponent</Text>. The child then renders
        the value of the message prop.
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

export default PropsScreen;
