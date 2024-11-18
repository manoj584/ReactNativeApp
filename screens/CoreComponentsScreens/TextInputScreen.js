import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TextInputScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>TextInput Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>TextInput</Text> component is used to
        capture user input in a text field. It supports features like
        placeholders, styles, and event handling.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { TextInput } from 'react-native';

return (
  <TextInput
    placeholder="Type here"
    style={styles.input}
  />
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, a simple{" "}
        <Text style={styles.bold}>TextInput</Text> field with a placeholder is
        created.
      </Text>

      {/* Styled TextInput Example */}
      <Text style={styles.subHeader}>Styled TextInput Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { TextInput } from 'react-native';

return (
  <TextInput
    placeholder="Enter your name"
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      borderRadius: 5
    }}
  />
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example, a styled <Text style={styles.bold}>TextInput</Text> is
        created with padding, border, and rounded corners.
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

export default TextInputScreen;
