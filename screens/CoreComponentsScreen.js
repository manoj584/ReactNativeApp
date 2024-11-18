import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const COMPONENTS_DATA = [
  {
    name: "View",
    description:
      "A container that supports layout with flexbox, style, some touch handling, and accessibility controls.",
    usage: "Use for layout and grouping other components.",
  },
  {
    name: "Text",
    description:
      "A component for displaying text, with support for styling and nesting.",
    usage: "Use for displaying text content within the app.",
  },
  {
    name: "Image",
    description:
      "A component for displaying images from various sources, including network URLs, static assets, and more.",
    usage: "Use for displaying images in the app.",
  },
  {
    name: "ScrollView",
    description:
      "A generic scrolling container that can hold multiple components and views. Useful for long content.",
    usage:
      "Use for scrolling layouts, such as long lists or scrollable content.",
  },
  {
    name: "TextInput",
    description:
      "A component for text input, allowing users to type and edit text.",
    usage: "Use for forms, search bars, and other text input fields.",
  },
  {
    name: "Button",
    description:
      "A basic button component for user interaction, can trigger actions when pressed.",
    usage: "Use for triggering actions, submitting forms, etc.",
  },
  {
    name: "FlatList",
    description:
      "A component for rendering large lists of data efficiently with support for pagination and pull-to-refresh.",
    usage: "Use for rendering large or scrollable lists.",
  },
  {
    name: "ImageBackground",
    description:
      "A component that renders an image as the background of a view or container.",
    usage: "Use to display images as backgrounds for sections or screens.",
  },
  {
    name: "KeyboardAvoidingView",
    description:
      "A wrapper that ensures the view is correctly adjusted when the keyboard is visible.",
    usage:
      "Use in forms or text inputs to prevent the keyboard from covering content.",
  },
  {
    name: "Modal",
    description:
      "A component for rendering content in a modal window that appears on top of the current screen.",
    usage: "Use to show important alerts or modal dialogs.",
  },
  {
    name: "Pressable",
    description:
      "A wrapper that detects press gestures and provides visual feedback when pressed.",
    usage: "Use to add interactive press behavior to components.",
  },
  {
    name: "RefreshControl",
    description:
      "A control component for triggering pull-to-refresh actions in a scrollable view.",
    usage: "Use with `ScrollView` or `FlatList` to allow for pull-to-refresh.",
  },
  {
    name: "SectionList",
    description:
      "A component for rendering a list with section headers, supports sticky headers.",
    usage: "Use for lists with grouped data sections.",
  },
  {
    name: "StatusBar",
    description:
      "A component to manage the app's status bar, allowing customization like color and style.",
    usage: "Use to control the appearance of the status bar.",
  },
  {
    name: "Switch",
    description:
      "A component for creating a toggle switch, used for binary choices (on/off).",
    usage: "Use for toggle options in settings or preferences.",
  },
  {
    name: "TouchableHighlight",
    description:
      "A component for wrapping elements and providing visual feedback when pressed.",
    usage: "Use for custom button interactions with visual feedback.",
  },
  {
    name: "TouchableOpacity",
    description:
      "A component for wrapping elements with an opacity change when pressed.",
    usage: "Use for buttons or any interactive elements.",
  },
  {
    name: "TouchableWithoutFeedback",
    description:
      "A wrapper component that handles touch events without providing any visual feedback.",
    usage: "Use when you need to intercept touches without visual feedback.",
  },
  {
    name: "VirtualizedList",
    description:
      "A component for rendering large lists with virtualization to improve performance.",
    usage:
      "Use for rendering very large lists with efficient memory management.",
  },
];

const CoreComponentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Core Components</Text>
      <FlatList
        data={COMPONENTS_DATA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.name + "Screen");
            }}
            style={styles.tableRow}
          >
            <Text style={[styles.tableCell, styles.componentName]}>
              {item.name}
            </Text>
            <Text style={styles.tableCell}>{item.description}</Text>
            <Text style={styles.tableCell}>{item.usage}</Text>
          </TouchableOpacity>
        )}
      />
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
  tableRow: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#3a3f47",
  },
  tableCell: {
    flex: 1,
    color: "#f0f0f0",
    fontSize: 14,
    paddingHorizontal: 5,
  },
  componentName: {
    fontWeight: "bold",
    color: "#61dafb",
  },
});

export default CoreComponentsScreen;
