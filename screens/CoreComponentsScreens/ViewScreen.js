import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ViewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>View Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>View</Text> component is the most commonly
        used container component in React Native. It is used to define the
        layout and structure of the UI. It can be styled and nested within other
        views to build complex interfaces.
      </Text>

      {/* Syntax Example for View */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { View, Text } from 'react-native';

return (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, World!</Text>
  </View>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, <Text style={styles.bold}>View</Text> is used to
        wrap the <Text style={styles.bold}>Text</Text> component. The container
        is styled using a simple style object.
      </Text>

      {/* Styling the View */}
      <Text style={styles.subHeader}>Styling the View</Text>
      <Text style={styles.body}>
        The <Text style={styles.bold}>View</Text> component can be styled using
        properties like <Text style={styles.bold}>padding</Text>,{" "}
        <Text style={styles.bold}>margin</Text>,{" "}
        <Text style={styles.bold}>backgroundColor</Text>,{" "}
        <Text style={styles.bold}>alignItems</Text>, and more.
      </Text>

      {/* Example of Styling View */}
      <Text style={styles.subHeader}>Styled View Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { View, Text } from 'react-native';

return (
  <View style={styles.styledView}>
    <Text style={styles.text}>Styled View Component</Text>
  </View>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, the <Text style={styles.bold}>View</Text> is
        styled with a background color, padding, and border radius.
      </Text>

      {/* SafeAreaView Example */}
      <Text style={styles.subHeader}>SafeAreaView</Text>
      <Text style={styles.body}>
        The <Text style={styles.bold}>SafeAreaView</Text> component ensures that
        content is not obscured by areas like the notch or home bar on modern
        devices.
      </Text>

      {/* Syntax Example for SafeAreaView */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { SafeAreaView } from 'react-native';

return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.text}>Content within the safe area.</Text>
  </SafeAreaView>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, the <Text style={styles.bold}>SafeAreaView</Text>{" "}
        component is used to ensure that content is displayed within the safe
        area.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: 20,
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
    color: "#61dafb",
    marginVertical: 15,
  },
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
  code: {
    color: "#f0f0f0",
    fontSize: 14,
    fontFamily: "monospace",
  },
  bold: {
    fontWeight: "bold",
    color: "#61dafb",
  },
  styledView: {
    backgroundColor: "#3a3f47",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#f0f0f0",
  },
  safeArea: {
    backgroundColor: "#3a3f47",
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
  },
});

export default ViewScreen;
