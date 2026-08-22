import React from "react";
import { Text, StyleSheet, SectionList, View } from "react-native";
import {
  ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const SectionListScreen = () => {
  const sections = [
    { title: "Fruits", data: ["Apple", "Banana", "Orange", "Grapes"] },
    { title: "Vegetables", data: ["Carrot", "Tomato", "Broccoli", "Spinach"] },
    { title: "Dairy", data: ["Milk", "Cheese", "Butter", "Yogurt"] },
  ];

  const ListHeader = () => (
    <View style={styles.headerContent}>
      <ScreenHeader title="SectionList Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
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
      <BodyText style={{ color: "#b4b4b4" }}>
        Below is a simple example using the{" "}
        <BoldAccent>SectionList</BoldAccent> component to display
        different categories of items.
      </BodyText>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<View style={{ height: 40 }} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
  },
  headerContent: {
    padding: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  item: { fontSize: 16, color: "#b4b4b4", padding: 10, textAlign: "center" },
  sectionHeader: {
    fontSize: 18, color: "#61dafb", backgroundColor: "#444c56",
    padding: 10, fontWeight: "bold",
  },
});

export default SectionListScreen;
