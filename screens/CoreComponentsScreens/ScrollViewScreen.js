import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ScrollViewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>ScrollView Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>ScrollView</Text> component is used to
        create scrollable containers in a React Native app. It can handle
        content that overflows the screen size.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { ScrollView, Text } from 'react-native';

return (
  <ScrollView>
    <Text>Content 1</Text>
    <Text>Content 2</Text>
    <Text>Content 3</Text>
    ...
  </ScrollView>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, the <Text style={styles.bold}>ScrollView</Text>{" "}
        wraps multiple child components, allowing them to be scrolled
        vertically.
      </Text>

      {/* Styled ScrollView Example */}
      <Text style={styles.subHeader}>Styled ScrollView Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { ScrollView, Text } from 'react-native';

return (
  <ScrollView style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
    <Text style={{ fontSize: 16, marginBottom: 10 }}>Item 1</Text>
    <Text style={{ fontSize: 16, marginBottom: 10 }}>Item 2</Text>
    <Text style={{ fontSize: 16, marginBottom: 10 }}>Item 3</Text>
    ...
  </ScrollView>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example, a styled <Text style={styles.bold}>ScrollView</Text>{" "}
        with padding and background color is used to create a visually appealing
        scrollable container.
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

export default ScrollViewScreen;
