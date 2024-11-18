import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const TouchableHighlightScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TouchableHighlight Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>TouchableHighlight</Text> component is
        used to create a button-like element with a highlight effect when
        pressed.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { TouchableHighlight } from 'react-native';

return (
  <TouchableHighlight
    onPress={() => alert('Button Pressed')}
    underlayColor="#DDDDDD"
  >
    <Text style={{ padding: 10 }}>Press Me</Text>
  </TouchableHighlight>
);
        `}</Text>
      </View>

      {/* Touchable Highlight Example */}
      <TouchableHighlight
        onPress={() => alert("Button Pressed")}
        underlayColor="#DDDDDD"
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableHighlight>
    </View>
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
    backgroundColor: "#61dafb",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TouchableHighlightScreen;
