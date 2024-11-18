import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TouchableOpacityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TouchableOpacity Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>TouchableOpacity</Text> component is used
        to create a button-like element with an opacity effect when pressed.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { TouchableOpacity } from 'react-native';

return (
  <TouchableOpacity
    onPress={() => alert('Button Pressed')}
    activeOpacity={0.7}
  >
    <Text style={{ padding: 10 }}>Press Me</Text>
  </TouchableOpacity>
);
        `}</Text>
      </View>

      {/* Touchable Opacity Example */}
      <TouchableOpacity
        onPress={() => alert("Button Pressed")}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
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

export default TouchableOpacityScreen;
