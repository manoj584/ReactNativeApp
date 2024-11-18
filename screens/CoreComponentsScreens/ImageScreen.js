import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const ImageScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Image Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>Image</Text> component is used to display
        images in a React Native app. It supports both local and remote image
        sources and provides various styling options.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Image } from 'react-native';

return (
  <Image
    source={require('./path-to-image.png')}
    style={{ width: 100, height: 100 }}
  />
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, a local image file is displayed using the{" "}
        <Text style={styles.bold}>Image</Text> component.
      </Text>

      {/* Remote Image Example */}
      <Text style={styles.subHeader}>Remote Image Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Image } from 'react-native';

return (
  <Image
    source={{ uri: 'https://example.com/image.png' }}
    style={{ width: 200, height: 200 }}
  />
);
        `}</Text>
      </View>
      <Text style={styles.body}>
        The above code demonstrates displaying an image from a remote URL.
      </Text>

      {/* Example Preview */}
      <Text style={styles.subHeader}>Example Preview:</Text>
      <View style={styles.imagePreviewContainer}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.image}
        />
        <Text style={styles.caption}>React Native Logo</Text>
      </View>
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
  imagePreviewContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: { width: 100, height: 100, marginBottom: 10 },
  caption: { fontSize: 14, color: "#f0f0f0" },
});

export default ImageScreen;
