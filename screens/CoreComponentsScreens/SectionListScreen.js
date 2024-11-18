import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const SectionListScreen = () => {
  // Example data for SectionList
  const sections = [
    {
      title: "Fruits",
      data: ["Apple", "Banana", "Orange", "Grapes"],
    },
    {
      title: "Vegetables",
      data: ["Carrot", "Tomato", "Broccoli", "Spinach"],
    },
    {
      title: "Dairy",
      data: ["Milk", "Cheese", "Butter", "Yogurt"],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SectionList Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>SectionList</Text> component is used to
        render a list with section headers, allowing for efficient rendering of
        large lists with grouped data.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { SectionList } from 'react-native';

const sections = [
  {
    title: 'Fruits',
    data: ['Apple', 'Banana', 'Orange'],
  },
  {
    title: 'Vegetables',
    data: ['Carrot', 'Tomato', 'Broccoli'],
  },
];

return (
  <SectionList
    sections={sections}
    renderItem={({ item }) => <Text>{item}</Text>}
    renderSectionHeader={({ section }) => (
      <Text style={styles.header}>{section.title}</Text>
    )}
  />
);
        `}</Text>
      </View>

      {/* SectionList Demo */}
      <Text style={styles.subHeader}>Sectioned List Example</Text>
      <Text style={styles.body}>
        Below is a simple example using the{" "}
        <Text style={styles.bold}>SectionList</Text> component to display
        different categories of items.
      </Text>

      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  item: {
    fontSize: 16,
    color: "#f0f0f0",
    padding: 10,
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 18,
    color: "#61dafb",
    backgroundColor: "#444c56",
    padding: 10,
    fontWeight: "bold",
  },
});

export default SectionListScreen;
