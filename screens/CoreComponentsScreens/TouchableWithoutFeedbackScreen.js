import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const TouchableWithoutFeedbackScreen = () => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TouchableWithoutFeedback Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>TouchableWithoutFeedback</Text> component
        is used to dismiss the keyboard when tapping outside of input fields.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text>Tap here to dismiss the keyboard</Text>
    </View>
  </TouchableWithoutFeedback>
);
        `}</Text>
      </View>

      {/* Touchable Without Feedback Example */}
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.box}>
          <Text style={styles.body}>Tap here to dismiss the keyboard</Text>
        </View>
      </TouchableWithoutFeedback>
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
  box: {
    backgroundColor: "#61dafb",
    padding: 15,
    borderRadius: 5,
  },
});

export default TouchableWithoutFeedbackScreen;
