import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("HomeScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="react" size={100} color="#61dafb" />
      <Text style={styles.text}>Learn React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default SplashScreen;
