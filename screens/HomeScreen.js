import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ScreenContainer, ScreenHeader } from "../components/ui";
import { CardPressable, CardTitle } from "../components/ui";
import { SearchBar } from "../components/ui";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width > 600 ? "45%" : "80%";

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

  const filteredScreens = screens.filter((screen) =>
    screen.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScreenContainer style={{ padding: 0, paddingBottom: 30 }}>
      <ScreenHeader
        title="Welcome to React Native"
        subtitle="Learn mobile development with ease"
      />

      <View style={{ paddingHorizontal: 20, marginBottom: 0 }}>
        <SearchBar
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search topics..."
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingHorizontal: 10,
        }}
      >
        {filteredScreens.map((screen, index) => (
          <CardPressable
            key={index}
            onPress={() => navigation.navigate(screen.name)}
            style={{
              width: CARD_WIDTH,
              marginVertical: 10,
              paddingVertical: 30,
              paddingHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ marginBottom: 12 }}>{screen.icon}</View>
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "700", textAlign: "center" }}>
              {screen.label}
            </Text>
          </CardPressable>
        ))}
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
