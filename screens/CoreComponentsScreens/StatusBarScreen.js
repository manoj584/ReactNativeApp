import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const StatusBarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>StatusBar Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>StatusBar</Text> component is used to
        control the app's status bar (the area at the top of the screen that
        shows time, battery, etc.). It allows you to change properties like
        visibility, style, and color of the status bar.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { StatusBar } from 'react-native';

return (
  <View>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <Text>Content Below StatusBar</Text>
  </View>
);
        `}</Text>
      </View>

      {/* StatusBar Customization */}
      <Text style={styles.subHeader}>Custom StatusBar Example:</Text>
      <Text style={styles.body}>
        In this example, we customize the status bar with a dark background and
        light text.
      </Text>

      {/* Custom StatusBar */}
      <StatusBar barStyle="light-content" backgroundColor="#333" />
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
});

export default StatusBarScreen;
