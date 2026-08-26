import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ScreenContainer, ScreenHeader } from "../components/ui";
import { CardPressable } from "../components/ui";
import { SearchBar } from "../components/ui";
import { getLangfuseClient } from "../utils/langfuse";

const CATEGORIES = ["All", "Fundamentals", "Hooks & State", "UI & Nav", "Practice"];

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const langfuse = getLangfuseClient();
  const { width } = useWindowDimensions();

  useEffect(() => {
    langfuse.trackScreen('HomeScreen');
  }, [langfuse]);

  const screens = [
    {
      name: "JSXScreen",
      label: "JSX",
      category: "Fundamentals",
      level: "Beginner",
      icon: <FontAwesome name="code" size={32} color="#61dafb" />,
      gradient: ["#61dafb", "#38bdf8"],
    },
    {
      name: "ComponentsScreen",
      label: "Components",
      category: "Fundamentals",
      level: "Beginner",
      icon: <FontAwesome name="cogs" size={32} color="#61dafb" />,
      gradient: ["#38bdf8", "#818cf8"],
    },
    {
      name: "PropsScreen",
      label: "Props",
      category: "Fundamentals",
      level: "Beginner",
      icon: <MaterialCommunityIcons name="link" size={32} color="#61dafb" />,
      gradient: ["#818cf8", "#c084fc"],
    },
    {
      name: "LifeCycleScreen",
      label: "LifeCycle",
      category: "Fundamentals",
      level: "Intermediate",
      icon: <FontAwesome6 name="infinity" size={26} color="#61dafb" />,
      gradient: ["#c084fc", "#f472b6"],
    },
    {
      name: "StateManagementScreen",
      label: "State Management",
      category: "Hooks & State",
      level: "Intermediate",
      icon: <FontAwesome name="sitemap" size={32} color="#61dafb" />,
      gradient: ["#61dafb", "#34d399"],
    },
    {
      name: "HooksScreen",
      label: "Hooks",
      category: "Hooks & State",
      level: "Intermediate",
      icon: <MaterialCommunityIcons name="hook" size={32} color="#61dafb" />,
      gradient: ["#34d399", "#a7f3d0"],
    },
    {
      name: "AdvancedHooksScreen",
      label: "Advanced Hooks",
      category: "Hooks & State",
      level: "Advanced",
      icon: <FontAwesome name="cogs" size={32} color="#61dafb" />,
      gradient: ["#fbbf24", "#f59e0b"],
    },
    {
      name: "ReactNativeAPIScreen",
      label: "React Native APIs",
      category: "Fundamentals",
      level: "Intermediate",
      icon: <FontAwesome name="code" size={32} color="#61dafb" />,
      gradient: ["#60a5fa", "#3b82f6"],
    },
    {
      name: "PerformanceScreen",
      label: "Performance",
      category: "Practice",
      level: "Advanced",
      icon: <FontAwesome name="flash" size={32} color="#61dafb" />,
      gradient: ["#f87171", "#ef4444"],
    },
    {
      name: "StylingScreen",
      label: "Styling",
      category: "UI & Nav",
      level: "Beginner",
      icon: <FontAwesome name="paint-brush" size={32} color="#61dafb" />,
      gradient: ["#f472b6", "#ec4899"],
    },
    {
      name: "NavigationPatternsScreen",
      label: "Navigation",
      category: "UI & Nav",
      level: "Intermediate",
      icon: <FontAwesome name="arrow-right" size={32} color="#61dafb" />,
      gradient: ["#a78bfa", "#8b5cf6"],
    },
    {
      name: "InterviewQuestionsScreen",
      label: "Interview Questions",
      category: "Practice",
      level: "Practice",
      icon: <FontAwesome name="question" size={32} color="#61dafb" />,
      gradient: ["#fb923c", "#f97316"],
    },
    {
      name: "QuizScreen",
      label: "Quiz & Test",
      category: "Practice",
      level: "Practice",
      icon: <MaterialCommunityIcons name="head-question" size={32} color="#61dafb" />,
      gradient: ["#4ade80", "#22c55e"],
    },
  ];

  const filteredScreens = screens.filter((screen) => {
    const matchesSearch = screen.label.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || screen.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCardPress = (screenName) => {
    langfuse.trackAction('navigate_to_screen', { screen: screenName });
    navigation.navigate(screenName);
  };

  const cardWidth = width > 600 ? "31%" : "47.5%";

  return (
    <ScreenContainer style={{ padding: 0, paddingBottom: 30 }}>
      <ScreenHeader
        title="Welcome to React Native"
        subtitle="Learn once, write anywhere"
      />

      <View style={styles.searchContainer}>
        <SearchBar
          value={searchTerm}
          onChangeText={(text) => {
            setSearchTerm(text);
            langfuse.trackAction('search', { query: text });
          }}
          placeholder="Search topics..."
        />
      </View>

      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContainer}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={[
                  styles.categoryChip,
                  isSelected && styles.categoryChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionTitle}>
          {searchTerm || selectedCategory !== "All"
            ? `Found ${filteredScreens.length} result${filteredScreens.length === 1 ? "" : "s"}`
            : `All Topics (${screens.length})`}
        </Text>
      </View>

      {filteredScreens.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="search" size={44} color="#61dafb" style={styles.emptyIcon} />
          <Text style={styles.emptyTitle}>No topics found</Text>
          <Text style={styles.emptySubtitle}>Try adjusting your filter or search term</Text>
        </View>
      ) : (
        <View style={styles.cardsContainer}>
          {filteredScreens.map((screen, index) => (
            <CardPressable
              key={index}
              onPress={() => handleCardPress(screen.name)}
              level={screen.level}
              gradientColors={screen.gradient}
              style={[
                styles.card,
                { width: cardWidth },
              ]}
            >
              <View style={styles.iconContainer}>{screen.icon}</View>
              <Text style={styles.cardLabel}>{screen.label}</Text>
            </CardPressable>
          ))}
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  categoriesWrapper: {
    height: 44,
    marginBottom: 10,
    flexGrow: 0,
    flexShrink: 0,
  },
  categoriesScroll: {
    height: 44,
    flexGrow: 0,
    flexShrink: 0,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  categoryChip: {
    paddingHorizontal: 14,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#1c1f26",
    borderWidth: 1,
    borderColor: "#373b47",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  categoryChipActive: {
    backgroundColor: "rgba(97, 218, 251, 0.15)",
    borderColor: "#61dafb",
  },
  categoryText: {
    fontSize: 12.5,
    color: "#8a93a5",
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#61dafb",
    fontWeight: "700",
  },
  sectionHeaderContainer: {
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#8a93a5",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 14,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 125,
  },
  iconContainer: {
    marginBottom: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cardLabel: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 18,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    marginBottom: 14,
    opacity: 0.8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#b4b4b4",
    textAlign: "center",
  },
});

export default HomeScreen;


