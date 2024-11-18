import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ButtonScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Button Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>Button</Text> component is used to create
        clickable buttons in a React Native app. It has properties like `title`,
        `onPress`, and `color` to customize its behavior and style.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Button } from 'react-native';

return (
  <Button
    title="Click Me"
    onPress={() => alert('Button Pressed')}
  />
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, a simple <Text style={styles.bold}>Button</Text>{" "}
        is created that shows an alert when pressed.
      </Text>

      {/* Styled Button Example */}
      <Text style={styles.subHeader}>Custom Button Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Button } from 'react-native';

return (
  <Button
    title="Submit"
    color="blue"
    onPress={() => console.log('Submitted')}
  />
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example, the <Text style={styles.bold}>Button</Text> is styled
        with a custom color and logs a message to the console when pressed.
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

export default ButtonScreen;
