import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const FlatListScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="FlatList Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>FlatList</BoldAccent> component is used to
        efficiently render large lists of data. It supports scrolling,
        customizable layouts, and performance optimizations.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
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
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, the <BoldAccent>FlatList</BoldAccent>{" "}
        component renders a list of items using the `data` array.
      </BodyText>

      <SubHeader>Custom FlatList Example:</SubHeader>
      <CodeBlock>{`
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
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In this example, the <BoldAccent>FlatList</BoldAccent> renders a
        list of fruits with custom styling for each item.
      </BodyText>
    </ScreenContainer>
  );
};

export default FlatListScreen;
