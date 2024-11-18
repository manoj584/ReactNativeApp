import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const FlatListScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>FlatList Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>FlatList</Text> component is used to
        efficiently render large lists of data. It supports scrolling,
        customizable layouts, and performance optimizations.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { FlatList, Text } from 'react-native';

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];

return (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Text>{item.name}</Text>}
  />
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, the <Text style={styles.bold}>FlatList</Text>{" "}
        component renders a list of items using the `data` array.
      </Text>

      {/* Custom FlatList Example */}
      <Text style={styles.subHeader}>Custom FlatList Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { FlatList, View, Text, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Apple' },
  { id: '2', name: 'Banana' },
  { id: '3', name: 'Cherry' },
];

return (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example, the <Text style={styles.bold}>FlatList</Text> renders a
        list of fruits with custom styling for each item.
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

export default FlatListScreen;
