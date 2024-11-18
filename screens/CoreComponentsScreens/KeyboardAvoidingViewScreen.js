import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const KeyboardAvoidingViewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>KeyboardAvoidingView Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>KeyboardAvoidingView</Text> component is
        used to automatically adjust the position of UI elements when the
        keyboard is displayed. This ensures that inputs or buttons are not
        hidden by the keyboard.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { KeyboardAvoidingView, TextInput, Button, StyleSheet } from 'react-native';

return (
  <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
  >
    <TextInput style={styles.input} placeholder="Type here" />
    <Button title="Submit" onPress={() => {}} />
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above,{" "}
        <Text style={styles.bold}>KeyboardAvoidingView</Text> is used with the{" "}
        <Text style={styles.bold}>behavior</Text> property set to{" "}
        <Text style={styles.bold}>padding</Text>. This ensures that the
        components adjust appropriately when the keyboard appears.
      </Text>

      {/* Advanced Usage */}
      <Text style={styles.subHeader}>Advanced Usage:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { KeyboardAvoidingView, TextInput, Button, Platform, StyleSheet } from 'react-native';

return (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={60}
  >
    <TextInput style={styles.input} placeholder="Enter text" />
    <Button title="Send" onPress={() => {}} />
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the advanced example, the <Text style={styles.bold}>behavior</Text>{" "}
        dynamically changes based on the platform, and the{" "}
        <Text style={styles.bold}>keyboardVerticalOffset</Text> is used to
        adjust the vertical offset for better positioning.
      </Text>
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
});

export default KeyboardAvoidingViewScreen;
