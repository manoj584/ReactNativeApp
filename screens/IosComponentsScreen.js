import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  InputAccessoryView,
} from "react-native";

const IOSComponentsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>iOS Components</Text>

      {/* InputAccessoryView Example */}
      <Text style={styles.subHeader}>InputAccessoryView</Text>
      <Text style={styles.body}>
        InputAccessoryView displays an accessory view, such as a toolbar, above
        the keyboard on iOS devices.
      </Text>

      {/* Syntax Example for InputAccessoryView */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { InputAccessoryView, TextInput } from 'react-native';

const inputAccessoryID = 'inputAccessory';

return (
  <TextInput
    style={styles.input}
    placeholder="Type here"
    inputAccessoryViewID={inputAccessoryID}
  />
  <InputAccessoryView nativeID={inputAccessoryID}>
    <View style={styles.toolbar}>
      <Text style={styles.toolbarText}>Custom Toolbar Above Keyboard</Text>
    </View>
  </InputAccessoryView>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above,{" "}
        <Text style={styles.bold}>InputAccessoryView</Text> is used to display a
        toolbar above the keyboard on iOS devices.
      </Text>

      {/* SafeAreaView Example */}
      <Text style={styles.subHeader}>SafeAreaView</Text>
      <Text style={styles.body}>
        SafeAreaView ensures that content is within the safe area boundaries of
        a device (e.g., iPhone X).
      </Text>

      {/* Syntax Example for SafeAreaView */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { SafeAreaView } from 'react-native';

return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.safeAreaText}>Content within the safe area.</Text>
  </SafeAreaView>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, <Text style={styles.bold}>SafeAreaView</Text> is
        used to ensure that content is displayed within the safe area boundaries
        of a device.
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
  input: {
    backgroundColor: "#fff",
    height: 40,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  toolbar: {
    backgroundColor: "#61dafb",
    padding: 10,
    alignItems: "center",
  },
  toolbarText: {
    color: "#fff",
    fontSize: 16,
  },
  safeArea: {
    backgroundColor: "#3a3f47",
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  safeAreaText: {
    color: "#f0f0f0",
    fontSize: 16,
  },
});

export default IOSComponentsScreen;
