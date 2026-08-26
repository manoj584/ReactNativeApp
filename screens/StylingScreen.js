import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const StylingScreen = () => {
  const [selectedStyle, setSelectedStyle] = useState("stylesheet");
  const [flexDir, setFlexDir] = useState("row");
  const [justify, setJustify] = useState("space-between");

  const renderContent = () => {
    switch (selectedStyle) {
      case "stylesheet":
        return (
          <View>
            <SubHeader>StyleSheet API:</SubHeader>
            <CodeBlock title="STYLESHEET API">{`import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

<View style={styles.container}>
  <Text style={styles.text}>Hello</Text>
</View>`}</CodeBlock>
            <BodyText>
              <BoldAccent>StyleSheet</BoldAccent> is the most common way to style React Native components.
              It provides performance optimizations and better code organization compared to inline styles.
            </BodyText>
          </View>
        );
      case "inline":
        return (
          <View>
            <SubHeader>Inline Styles:</SubHeader>
            <CodeBlock title="INLINE STYLES">{`<View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
  <Text style={{ fontSize: 16, color: '#333' }}>
    Hello
  </Text>
</View>`}</CodeBlock>
            <BodyText>
              Inline styles are convenient for small, one-off styles but can impact performance
              when used extensively. They're not recommended for production apps.
            </BodyText>
          </View>
        );
      case "conditional":
        return (
          <View>
            <SubHeader>Conditional Styling:</SubHeader>
            <CodeBlock title="CONDITIONAL STYLING">{`<View style={[
  styles.baseStyle,
  isActive && styles.activeStyle,
  isError && styles.errorStyle
]}>
  <Text>Conditional Text</Text>
</View>`}</CodeBlock>
            <BodyText>
              Use array syntax to apply styles conditionally. This allows you to combine base styles
              with conditional styles based on component state or props.
            </BodyText>
          </View>
        );
      case "stylinglibraries":
        return (
          <View>
            <SubHeader>Styling Libraries:</SubHeader>
            <BodyText>
              <BoldAccent>NativeWind (Tailwind CSS):</BoldAccent> Brings Tailwind CSS utility classes
              to React Native. Great for rapid development and consistent design systems.
            </BodyText>
            <CodeBlock title="NATIVEWIND (TAILWIND)">{`import { View, Text } from 'react-native';

<View className="flex-1 bg-gray-100 p-4">
  <Text className="text-xl font-bold text-gray-800">
    Hello
  </Text>
</View>`}</CodeBlock>
            <BodyText>
              <BoldAccent>Styled Components:</BoldAccent> CSS-in-JS library for React Native.
              Provides component-level styling with prop-based dynamic styles.
            </BodyText>
            <CodeBlock title="STYLED COMPONENTS">{`import styled from 'styled-components/native';

const Container = styled.View\`
  flex: 1;
  background-color: #f5f5f5;
  padding: 16px;
\`;

<Container>
  <Text>Hello</Text>
</Container>`}</CodeBlock>
            <BodyText>
              <BoldAccent>Native Paper:</BoldAccent> Material Design components for React Native.
              Provides pre-styled components following Material Design guidelines.
            </BodyText>
          </View>
        );
      case "responsive":
        return (
          <View>
            <SubHeader>Responsive Design:</SubHeader>
            <CodeBlock title="RESPONSIVE STYLING">{`import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'ios' ? 20 : 16,
    width: width > 600 ? '50%' : '90%',
  },
});`}</CodeBlock>
            <BodyText>
              Use <BoldAccent>Dimensions</BoldAccent> API and <BoldAccent>Platform</BoldAccent> API for
              responsive designs. Consider using percentage-based layouts and flexbox for better
              responsiveness.
            </BodyText>
          </View>
        );
      case "theming":
        return (
          <View>
            <SubHeader>Theming:</SubHeader>
            <CodeBlock title="DARK MODE THEMING">{`import { useColorScheme } from 'react-native';

const colorScheme = useColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
  },
});`}</CodeBlock>
            <BodyText>
              <BoldAccent>useColorScheme</BoldAccent> hook detects the system's color scheme preference.
              Use it to implement dark mode support in your application.
            </BodyText>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Styling Approaches" />

      <SubHeader>Styling Methods:</SubHeader>
      <View style={styles.tabContainer}>
        {["stylesheet", "inline", "conditional", "stylinglibraries", "responsive", "theming"].map((style) => (
          <TouchableOpacity
            key={style}
            style={[styles.tab, selectedStyle === style && styles.activeTab]}
            onPress={() => setSelectedStyle(style)}
          >
            <Text style={[styles.tabText, selectedStyle === style && styles.activeTabText]}>
              {style === "stylinglibraries" ? "Libraries" : style.charAt(0).toUpperCase() + style.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentContainer}>
        {renderContent()}
      </View>

      {/* Interactive Flexbox Playground */}
      <SubHeader>Live Flexbox Playground:</SubHeader>
      <View style={styles.playgroundCard}>
        <Text style={styles.playgroundTitle}>Interactive Layout Customizer</Text>

        <View style={styles.controlRow}>
          <Text style={styles.controlLabel}>flexDirection:</Text>
          <TouchableOpacity
            style={[styles.chip, flexDir === "row" && styles.chipActive]}
            onPress={() => setFlexDir("row")}
          >
            <Text style={[styles.chipText, flexDir === "row" && styles.chipTextActive]}>row</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chip, flexDir === "column" && styles.chipActive]}
            onPress={() => setFlexDir("column")}
          >
            <Text style={[styles.chipText, flexDir === "column" && styles.chipTextActive]}>column</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.controlRow}>
          <Text style={styles.controlLabel}>justifyContent:</Text>
          <TouchableOpacity
            style={[styles.chip, justify === "space-between" && styles.chipActive]}
            onPress={() => setJustify("space-between")}
          >
            <Text style={[styles.chipText, justify === "space-between" && styles.chipTextActive]}>between</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chip, justify === "center" && styles.chipActive]}
            onPress={() => setJustify("center")}
          >
            <Text style={[styles.chipText, justify === "center" && styles.chipTextActive]}>center</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.previewBox,
            { flexDirection: flexDir, justifyContent: justify, alignItems: "center" },
          ]}
        >
          <View style={[styles.boxItem, { backgroundColor: "#61dafb" }]}>
            <Text style={styles.boxText}>1</Text>
          </View>
          <View style={[styles.boxItem, { backgroundColor: "#c678dd" }]}>
            <Text style={styles.boxText}>2</Text>
          </View>
          <View style={[styles.boxItem, { backgroundColor: "#98c379" }]}>
            <Text style={styles.boxText}>3</Text>
          </View>
        </View>
      </View>

      <SubHeader>Best Practices:</SubHeader>
      <BodyText>
        • Use <BoldAccent>StyleSheet.create</BoldAccent> for better performance
        • Organize styles by component or feature
        • Use consistent naming conventions
        • Implement dark mode support
        • Use flexbox for layout instead of fixed dimensions
      </BodyText>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 12,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: "#1c1f26",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#373b47",
  },
  activeTab: {
    backgroundColor: "rgba(97, 218, 251, 0.15)",
    borderColor: "#61dafb",
  },
  tabText: {
    color: "#8a93a5",
    fontSize: 13,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#61dafb",
    fontWeight: "700",
  },
  contentContainer: {
    width: "100%",
    marginVertical: 10,
  },
  playgroundCard: {
    width: "100%",
    backgroundColor: "#282c34",
    borderRadius: 14,
    padding: 16,
    marginVertical: 14,
    borderWidth: 1,
    borderColor: "#373b47",
  },
  playgroundTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#61dafb",
    marginBottom: 12,
    textAlign: "center",
  },
  controlRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  controlLabel: {
    fontSize: 12.5,
    color: "#b4b4b4",
    width: 105,
    fontWeight: "600",
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#1c1f26",
    borderWidth: 1,
    borderColor: "#373b47",
    marginRight: 6,
  },
  chipActive: {
    borderColor: "#61dafb",
    backgroundColor: "rgba(97, 218, 251, 0.15)",
  },
  chipText: {
    fontSize: 12,
    color: "#8a93a5",
  },
  chipTextActive: {
    color: "#61dafb",
    fontWeight: "700",
  },
  previewBox: {
    height: 100,
    backgroundColor: "#1c1f26",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#373b47",
    padding: 12,
    marginTop: 10,
  },
  boxItem: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    color: "#20232a",
    fontWeight: "800",
    fontSize: 14,
  },
});

export default StylingScreen;