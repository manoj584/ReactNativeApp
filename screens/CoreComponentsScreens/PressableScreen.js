import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

const PressableScreen = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Pressable Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>Pressable</Text> component is used to
        create a clickable element that responds to touch interactions. It
        replaces the <Text style={styles.bold}>TouchableOpacity</Text>,{" "}
        <Text style={styles.bold}>TouchableHighlight</Text>, and{" "}
        <Text style={styles.bold}>TouchableWithoutFeedback</Text> components in
        newer React Native versions.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Pressable, Text } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable onPress={() => setPressed(!pressed)}>
      <Text>{pressed ? 'Pressed!' : 'Press Me!'}</Text>
    </Pressable>
  );
};
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, a simple{" "}
        <Text style={styles.bold}>Pressable</Text> component is used. When the
        user presses it, the state changes, and the text toggles between "Press
        Me!" and "Pressed!".
      </Text>

      {/* Interactive Pressable Demo */}
      <Text style={styles.subHeader}>Demo:</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#61dafb" : "#333840" },
        ]}
        onPress={() => setPressed(!pressed)}
      >
        <Text style={styles.buttonText}>
          {pressed ? "Pressed!" : "Press Me!"}
        </Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#282c34",
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeader: { fontSize: 20, color: "#61dafb", marginVertical: 15 },
  body: {
    fontSize: 16,
    color: "#f0f0f0",
    marginBottom: 20,
    textAlign: "center",
  },
  exampleBox: {
    width: "100%",
    backgroundColor: "#333840",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  code: { color: "#f0f0f0", fontSize: 14, fontFamily: "monospace" },
  bold: { fontWeight: "bold", color: "#61dafb" },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PressableScreen;
