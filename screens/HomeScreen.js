import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const { width } = Dimensions.get('window');
const CARD_WIDTH = width > 600 ? '45%' : '80%';

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
    {
      name: "QuizScreen",
      label: "Quiz & Test",
      icon: <MaterialCommunityIcons name="head-question" size={40} color="#61dafb" />,
    },
  ];

  // Filter the screens based on search term
  const filteredScreens = screens.filter((screen) =>
    screen.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.header}>Welcome to React Native</Text>
          <Text style={styles.subtitle}>Learn mobile development with ease</Text>
        </View>

        {/* Search Box */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchContainer}>
            <FontAwesome name="search" size={18} color="#61dafb" style={styles.searchIcon} />
            <TextInput
              style={styles.searchBox}
              placeholder="Search topics..."
              placeholderTextColor="#999"
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
          </View>
        </View>

        {/* Cards Grid */}
        <View style={styles.cardsGrid}>
          {filteredScreens.map((screen, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate(screen.name)}
              activeOpacity={0.7}
            >
              <View style={styles.iconWrapper}>
                {screen.icon}
              </View>
              <Text style={styles.cardText}>{screen.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#282c34",
    paddingBottom: 30,
  },
  headerSection: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    color: "#61dafb",
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#a0a0a0",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "400",
  },
  searchWrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3a3f47",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#4a5057",
  },
  searchIcon: {
    marginRight: 12,
  },
  searchBox: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    height: 50,
  },
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#3a3f47",
    borderRadius: 16,
    marginVertical: 10,
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "#4a5057",
  },
  iconWrapper: {
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  swipeIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#3a3f47",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#4a5057",
  },
  swipeText: {
    fontSize: 14,
    color: "#a0a0a0",
    marginLeft: 10,
    fontWeight: "500",
  },
});

export default HomeScreen;
