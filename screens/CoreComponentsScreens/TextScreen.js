import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TextScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Text Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>Text</Text> component is used to display
        text in a React Native app. It can be styled with various text
        properties.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Text } from 'react-native';

return (
  <Text style={styles.text}>Hello, World!</Text>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, a simple <Text style={styles.bold}>Text</Text>
        component is rendered.
      </Text>

      {/* Styling Text */}
      <Text style={styles.subHeader}>Styled Text Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Text } from 'react-native';

return (
  <Text style={{ fontSize: 20, color: 'blue' }}>Styled Text</Text>
);
        `}</Text>
      </View>
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

export default TextScreen;
