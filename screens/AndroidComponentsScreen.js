import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  DrawerLayoutAndroid,
} from "react-native";

const AndroidComponentsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Android Components</Text>

      {/* DrawerLayoutAndroid Example */}
      <Text style={styles.subHeader}>DrawerLayoutAndroid</Text>
      <Text style={styles.body}>
        DrawerLayoutAndroid provides a sliding drawer for Android apps.
      </Text>

      {/* Syntax Example for DrawerLayoutAndroid */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { DrawerLayoutAndroid } from 'react-native';

const drawer = useRef(null);

return (
  <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition="left"
    renderNavigationView={() => (
      <View style={styles.drawerContent}>
        <Text style={styles.drawerText}>This is the drawer content.</Text>
      </View>
    )}
  >
    <TouchableNativeFeedback onPress={() => drawer.current.openDrawer()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Open Drawer</Text>
      </View>
    </TouchableNativeFeedback>
  </DrawerLayoutAndroid>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above,{" "}
        <Text style={styles.bold}>DrawerLayoutAndroid</Text> is used to create a
        sliding drawer. The drawer can be opened with a button press.
      </Text>

      {/* TouchableNativeFeedback Example */}
      <Text style={styles.subHeader}>TouchableNativeFeedback</Text>
      <Text style={styles.body}>
        TouchableNativeFeedback creates native feedback effects on Android, like
        ripple effects.
      </Text>

      {/* Syntax Example for TouchableNativeFeedback */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { TouchableNativeFeedback } from 'react-native';

return (
  <TouchableNativeFeedback onPress={() => alert("Pressed!")}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Press Me</Text>
    </View>
  </TouchableNativeFeedback>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above,{" "}
        <Text style={styles.bold}>TouchableNativeFeedback</Text> is used to add
        ripple effect when the button is pressed.
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
  button: {
    backgroundColor: "#3a3f47",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  drawerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#61dafb",
    height: "100%",
  },
  drawerText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default AndroidComponentsScreen;
