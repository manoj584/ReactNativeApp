import React from "react";
import { View, Text, StyleSheet, VirtualizedList } from "react-native";

const VirtualizedListScreen = () => {
  const data = new Array(1000).fill(null).map((_, index) => ({
    key: String(index),
    title: `Item ${index + 1}`,
  }));

  const getItem = (data, index) => data[index];

  const getItemCount = (data) => data.length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>VirtualizedList Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>VirtualizedList</Text> component is a
        performance-optimized list for rendering large data sets in a
        virtualized manner.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { VirtualizedList } from 'react-native';

const data = new Array(1000).fill(null).map((_, index) => ({
  key: String(index),
  title: \`Item \${index + 1}\`,
}));

return (
  <VirtualizedList
    data={data}
    initialNumToRender={10}
    renderItem={({ item }) => <Text>{item.title}</Text>}
    keyExtractor={(item) => item.key}
    getItemCount={(data) => data.length}
    getItem={(data, index) => data[index]}
  />
);
        `}</Text>
      </View>

      {/* VirtualizedList Example */}
      <VirtualizedList
        data={data}
        initialNumToRender={10}
        renderItem={({ item }) => <Text style={styles.body}>{item.title}</Text>}
        keyExtractor={(item) => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
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
});

export default VirtualizedListScreen;
