import React from "react";
import { View, Text, StyleSheet, VirtualizedList } from "react-native";
import {
  ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const VirtualizedListScreen = () => {
  const data = new Array(1000).fill(null).map((_, index) => ({
    key: String(index),
    title: `Item ${index + 1}`,
  }));

  const getItem = (data, index) => data[index];
  const getItemCount = (data) => data.length;

  return (
    <View style={styles.container}>
      <ScreenHeader title="VirtualizedList Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>VirtualizedList</BoldAccent> component is a
        performance-optimized list for rendering large data sets in a
        virtualized manner.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
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
);`}</CodeBlock>

      <VirtualizedList
        data={data}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.title}</Text>
        )}
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
  item: { fontSize: 16, color: "#b4b4b4", marginBottom: 10, textAlign: "center" },
});

export default VirtualizedListScreen;
