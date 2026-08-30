import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ComponentDetailScreen = ({ route }) => {
  const { name, syntax, example } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.subHeader}>Syntax:</Text>
        <Text style={styles.syntax}>{syntax}</Text>
        <Text style={styles.subHeader}>Example:</Text>
        <Text style={styles.example}>{example}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  subHeader: {
    fontSize: 20,
    color: "#b4b4b4",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  syntax: {
    fontSize: 16,
    color: "#a6e22e",
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 5,
    fontFamily: "monospace",
  },
  example: {
    fontSize: 16,
    color: "#b4b4b4",
    marginTop: 10,
  },
});

export default ComponentDetailScreen;
