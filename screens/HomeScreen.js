import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PanGestureHandler } from "react-native-gesture-handler";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const screens = [
    {
      name: "JSXScreen",
      label: "JSX",
      icon: <FontAwesome name="code" size={40} color="#61dafb" />,
    },
    {
      name: "ComponentsScreen",
      label: "Components",
      icon: <FontAwesome name="cogs" size={40} color="#61dafb" />,
    },
    {
      name: "StateManagementScreen",
      label: "State Management",
      icon: <FontAwesome name="sitemap" size={40} color="#61dafb" />,
    },
    {
      name: "PropsScreen",
      label: "Props",
      icon: <MaterialCommunityIcons name="link" size={40} color="#61dafb" />,
    },
    {
      name: "LifeCycleScreen",
      label: "LifeCycle",
      icon: <FontAwesome6 name="infinity" size={30} color="#61dafb" />,
    },
    {
      name: "HooksScreen",
      label: "Hooks",
      icon: <MaterialCommunityIcons name="hook" size={40} color="#61dafb" />,
    },
    {
      name: "InterviewQuestionsScreen",
      label: "Interview Questions",
      icon: <FontAwesome name="question" size={40} color="#61dafb" />,
    },
  ];

  // Filter the screens based on search term
  const filteredScreens = screens.filter((screen) =>
    screen.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle swipe left gesture to navigate to Interview Questions
  const handleSwipeLeft = () => {
    navigation.navigate("InterviewQuestionsScreen");
  };

  return (
    <PanGestureHandler
      onGestureEvent={(event) => {
        if (event.nativeEvent.translationX < -50) {
          handleSwipeLeft();
        }
      }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Welcome to React Native</Text>

        {/* Search Box */}
        <TextInput
          style={styles.searchBox}
          placeholder="Search..."
          placeholderTextColor="#ccc"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />

        {/* Render filtered screens */}
        {filteredScreens.map((screen, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(screen.name)}
          >
            {screen.icon}
            <Text style={styles.cardText}>{screen.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Indicator to show swiping option */}
        <View style={styles.swipeIndicatorContainer}>
          <Text style={styles.swipeText}>
            Swipe Left for Interview Questions
          </Text>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#61dafb" />
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#282c34",
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  searchBox: {
    width: "80%",
    height: 40,
    backgroundColor: "#3a3f47",
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    width: "80%",
    paddingVertical: 25,
    backgroundColor: "#3a3f47",
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  swipeIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  swipeText: {
    fontSize: 16,
    color: "#fff",
    marginRight: 8,
  },
});

export default HomeScreen;
