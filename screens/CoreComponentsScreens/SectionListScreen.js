import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import {
  ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const SectionListScreen = () => {
  const sections = [
    { title: "Fruits", data: ["Apple", "Banana", "Orange", "Grapes"] },
    { title: "Vegetables", data: ["Carrot", "Tomato", "Broccoli", "Spinach"] },
    { title: "Dairy", data: ["Milk", "Cheese", "Butter", "Yogurt"] },
  ];

  return (
    <View style={styles.container}>
      <ScreenHeader title="SectionList Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>SectionList</BoldAccent> component is used to
        render a list with section headers, allowing for efficient rendering of
        large lists with grouped data.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { SectionList } from 'react-native';

const sections = [
  { title: 'Fruits', data: ['Apple', 'Banana', 'Orange'] },
  { title: 'Vegetables', data: ['Carrot', 'Tomato', 'Broccoli'] },
];

return (
  <SectionList
    sections={sections}
    renderItem={({ item }) => <Text>{item}</Text>}
    renderSectionHeader={({ section }) => (
      <Text style={styles.header}>{section.title}</Text>
    )}
  />
);`}</CodeBlock>

      <SubHeader>Sectioned List Example</SubHeader>
      <BodyText style={{ color: "#f0f0f0" }}>
        Below is a simple example using the{" "}
        <BoldAccent>SectionList</BoldAccent> component to display
        different categories of items.
      </BodyText>

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
  item: { fontSize: 16, color: "#f0f0f0", padding: 10, textAlign: "center" },
  sectionHeader: {
    fontSize: 18, color: "#61dafb", backgroundColor: "#444c56",
    padding: 10, fontWeight: "bold",
  },
});

export default SectionListScreen;
