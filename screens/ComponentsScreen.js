import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ComponentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Core Components</Text>
      <Text style={styles.intro}>
        React Native has many Core Components for everything from controls to
        activity indicators. Here are some essential ones:
      </Text>

      {/* Cards for Components */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("CoreComponents")}
        >
          <Text style={styles.cardTitle}>Core Components</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AndroidComponents")}
        >
          <Text style={styles.cardTitle}>Android Components</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("IOSComponents")}
        >
          <Text style={styles.cardTitle}>iOS Components</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  intro: {
    fontSize: 16,
    color: "#f0f0f0",
    marginBottom: 20,
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "column", // Changed to column to stack the cards vertically
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#3a3f47",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15, // Added spacing between cards
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Shadow styling to make it look like HomeScreen cards
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  cardTitle: {
    color: "#61dafb",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ComponentsScreen;
