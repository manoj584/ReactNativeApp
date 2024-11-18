import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ImageBackgroundScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>ImageBackground Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>ImageBackground</Text> component is used
        to display an image as the background of a view. It supports nesting
        other components inside it.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { ImageBackground, Text } from 'react-native';

const image = { uri: 'https://example.com/background-image.jpg' };

return (
  <ImageBackground
    source={image}
    style={{ width: '100%', height: '100%' }}
  >
    <Text style={{ color: 'white' }}>Hello, Background!</Text>
  </ImageBackground>
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, an image is set as the background, and a{" "}
        <Text style={styles.bold}>Text</Text> component is displayed over it.
      </Text>

      {/* Styling Example */}
      <Text style={styles.subHeader}>Custom Styling Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

const image = { uri: 'https://example.com/background-image.jpg' };

return (
  <ImageBackground source={image} style={styles.background}>
    <View style={styles.overlay}>
      <Text style={styles.text}>Overlay Content</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
        `}</Text>
      </View>
      <Text style={styles.body}>
        In this example, a semi-transparent overlay is added over the background
        image with text content inside it.
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

export default ImageBackgroundScreen;
