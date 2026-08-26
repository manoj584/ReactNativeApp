import "./global.css";
import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { getLangfuseClient } from "./utils/langfuse";

// Importing Screens
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import JSXScreen from "./screens/JSXScreen";
import ComponentsScreen from "./screens/ComponentsScreen";
import AndroidComponentsScreen from "./screens/AndroidComponentsScreen";
import IOSComponentsScreen from "./screens/IosComponentsScreen";
import StateManagementScreen from "./screens/StateManagementScreen";
import PropsScreen from "./screens/PropsScreen";
import LifeCycleScreen from "./screens/LifeCycleScreen";
import HooksScreen from "./screens/HooksScreen";
import AdvancedHooksScreen from "./screens/AdvancedHooksScreen";
import ReactNativeAPIScreen from "./screens/ReactNativeAPIScreen";
import PerformanceScreen from "./screens/PerformanceScreen";
import StylingScreen from "./screens/StylingScreen";
import NavigationPatternsScreen from "./screens/NavigationPatternsScreen";
import CoreComponentsScreen from "./screens/CoreComponentsScreen";
import ComponentDetailScreen from "./screens/ComponentDetailScreen";
import ViewScreen from "./screens/CoreComponentsScreens/ViewScreen";
import TextScreen from "./screens/CoreComponentsScreens/TextScreen";
import ButtonScreen from "./screens/CoreComponentsScreens/ButtonScreen";
import FlatListScreen from "./screens/CoreComponentsScreens/FlatListScreen";
import ImageBackgroundScreen from "./screens/CoreComponentsScreens/ImageBackgroundScreen";
import ImageScreen from "./screens/CoreComponentsScreens/ImageScreen";
import KeyboardAvoidingViewScreen from "./screens/CoreComponentsScreens/KeyboardAvoidingViewScreen";
import ModalScreen from "./screens/CoreComponentsScreens/ModalScreen";
import PressableScreen from "./screens/CoreComponentsScreens/PressableScreen";
import RefreshControlScreen from "./screens/CoreComponentsScreens/RefreshControlScreen";
import SectionListScreen from "./screens/CoreComponentsScreens/SectionListScreen";
import StatusBarScreen from "./screens/CoreComponentsScreens/StatusBarScreen";
import SwitchScreen from "./screens/CoreComponentsScreens/SwitchScreen";
import TextInputScreen from "./screens/CoreComponentsScreens/TextInputScreen";
import TouchableHighlightScreen from "./screens/CoreComponentsScreens/TouchableHighlightScreen";
import TouchableOpacityScreen from "./screens/CoreComponentsScreens/TouchableOpacityScreen";
import TouchableWithoutFeedbackScreen from "./screens/CoreComponentsScreens/TouchableWithoutFeedbackScreen";
import VirtualizedListScreen from "./screens/CoreComponentsScreens/VirtualizedListScreen";
import ScrollViewScreen from "./screens/CoreComponentsScreens/ScrollViewScreen";
import InterviewQuestionsScreen from "./screens/InterviewQuestionsScreen";
import QuestionDetailScreen from "./screens/QuestionDetailScreen";
import QuizScreen from "./screens/QuizScreen";

// Redux actions, reducer, and store setup
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Custom Back Button for other screens
const CustomBackButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.backButton}>
      <FontAwesome name="angle-left" size={24} color="#61dafb" />
    </TouchableOpacity>
  );
};

// Drawer Navigator
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Custom Drawer Content (with search and navigation buttons)
function CustomDrawerContent(props) {
  const categories = [
    {
      title: "Main",
      items: [
        {
          name: "HomeScreen",
          label: "Home",
          icon: <FontAwesome name="home" size={18} color="#61dafb" />,
        },
      ],
    },
    {
      title: "Fundamentals",
      items: [
        {
          name: "JSXScreen",
          label: "JSX",
          icon: <FontAwesome name="code" size={18} color="#61dafb" />,
        },
        {
          name: "ComponentsScreen",
          label: "Components",
          icon: <FontAwesome name="cogs" size={18} color="#61dafb" />,
        },
        {
          name: "PropsScreen",
          label: "Props",
          icon: <MaterialCommunityIcons name="link" size={18} color="#61dafb" />,
        },
        {
          name: "LifeCycleScreen",
          label: "LifeCycle",
          icon: <FontAwesome6 name="infinity" size={16} color="#61dafb" />,
        },
        {
          name: "ReactNativeAPIScreen",
          label: "React Native APIs",
          icon: <FontAwesome name="code" size={18} color="#61dafb" />,
        },
      ],
    },
    {
      title: "Hooks & State",
      items: [
        {
          name: "StateManagementScreen",
          label: "State Management",
          icon: <FontAwesome name="sitemap" size={18} color="#61dafb" />,
        },
        {
          name: "HooksScreen",
          label: "Hooks",
          icon: <MaterialCommunityIcons name="hook" size={18} color="#61dafb" />,
        },
        {
          name: "AdvancedHooksScreen",
          label: "Advanced Hooks",
          icon: <FontAwesome name="cogs" size={18} color="#61dafb" />,
        },
      ],
    },
    {
      title: "UI & Navigation",
      items: [
        {
          name: "StylingScreen",
          label: "Styling",
          icon: <FontAwesome name="paint-brush" size={18} color="#61dafb" />,
        },
        {
          name: "NavigationPatternsScreen",
          label: "Navigation",
          icon: <FontAwesome name="arrow-right" size={18} color="#61dafb" />,
        },
      ],
    },
    {
      title: "Practice & Test",
      items: [
        {
          name: "PerformanceScreen",
          label: "Performance",
          icon: <FontAwesome name="flash" size={18} color="#61dafb" />,
        },
        {
          name: "InterviewQuestionsScreen",
          label: "Interview Questions",
          icon: <FontAwesome name="question" size={18} color="#61dafb" />,
        },
        {
          name: "QuizScreen",
          label: "Quiz & Test",
          icon: <MaterialCommunityIcons name="head-question" size={18} color="#61dafb" />,
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.drawerContainer} edges={["top"]}>
      <View style={styles.drawerHeader}>
        <MaterialCommunityIcons name="react" size={38} color="#61dafb" />
        <Text style={styles.drawerTitle}>React Native</Text>
        <Text style={styles.drawerSubtitle}>Learning Hub</Text>
      </View>

      <ScrollView
        style={styles.menuScroll}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {categories.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.sectionBlock}>
            <Text style={styles.sectionHeaderTitle}>{section.title}</Text>
            {section.items.map((screen, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  props.navigation.dispatch(
                    CommonActions.navigate({
                      name: "MainStack",
                      params: { screen: screen.name },
                    })
                  );
                  props.navigation.closeDrawer();
                }}
                activeOpacity={0.7}
              >
                <View style={styles.menuItemContent}>
                  <View style={styles.iconContainer}>
                    {screen.icon}
                  </View>
                  <Text style={styles.menuItemText}>{screen.label}</Text>
                  <FontAwesome name="angle-right" size={16} color="#6c757d" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Menu Button to open Drawer (only for HomeScreen)
function MenuButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.menuButton}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    >
      <FontAwesome name="bars" size={24} color="#61dafb" />
    </TouchableOpacity>
  );
}

// Stack Navigator for screens
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#20232a",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#373b47",
          minHeight:
            Platform.OS === "android"
              ? 56 + (StatusBar.currentHeight || 0)
              : 56,
        },
        headerTitleStyle: {
          color: "#ffffff",
          fontSize: 18,
          fontWeight: "600",
          lineHeight: 22,
        },
        headerTitleContainerStyle: {
          justifyContent: "center",
          alignItems: "center",
          left: 0,
          right: 0,
        },
        headerLeftContainerStyle: {
          paddingLeft: 8,
          alignItems: "center",
          justifyContent: "center",
        },
        headerTintColor: "#61dafb",
        cardStyle: { backgroundColor: "#20232a" },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "React Native Guide",
          headerLeft: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="JSXScreen"
        component={JSXScreen}
        options={{
          title: "JSX",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ComponentsScreen"
        component={ComponentsScreen}
        options={{
          title: "Components",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="AndroidComponents"
        component={AndroidComponentsScreen}
        options={{
          title: "Android Components",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="IOSComponents"
        component={IOSComponentsScreen}
        options={{
          title: "IOS Components",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="CoreComponents"
        component={CoreComponentsScreen}
        options={{
          title: "Core Components",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ComponentDetails"
        component={ComponentDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="StateManagementScreen"
        component={StateManagementScreen}
        options={{
          title: "State Management",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="PropsScreen"
        component={PropsScreen}
        options={{
          title: "Props",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="LifeCycleScreen"
        component={LifeCycleScreen}
        options={{
          title: "Life Cycle",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="HooksScreen"
        component={HooksScreen}
        options={{
          title: "Hooks",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="AdvancedHooksScreen"
        component={AdvancedHooksScreen}
        options={{
          title: "Advanced Hooks",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ReactNativeAPIScreen"
        component={ReactNativeAPIScreen}
        options={{
          title: "React Native APIs",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="PerformanceScreen"
        component={PerformanceScreen}
        options={{
          title: "Performance",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="StylingScreen"
        component={StylingScreen}
        options={{
          title: "Styling",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="NavigationPatternsScreen"
        component={NavigationPatternsScreen}
        options={{
          title: "Navigation Patterns",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ViewScreen"
        component={ViewScreen}
        options={{
          title: "View",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="TextScreen"
        component={TextScreen}
        options={{
          title: "Text",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ButtonScreen"
        component={ButtonScreen}
        options={{
          title: "Button",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="FlatListScreen"
        component={FlatListScreen}
        options={{
          title: "Flat List",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ImageBackgroundScreen"
        component={ImageBackgroundScreen}
        options={{
          title: "Image Background",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{
          title: "Image",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="KeyboardAvoidingViewScreen"
        component={KeyboardAvoidingViewScreen}
        options={{
          title: "Keyboard Avoiding View",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{
          title: "Modal",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="PressableScreen"
        component={PressableScreen}
        options={{
          title: "Pressable",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="RefreshControlScreen"
        component={RefreshControlScreen}
        options={{
          title: "Refresh Control",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="ScrollViewScreen"
        component={ScrollViewScreen}
        options={{
          title: "Scroll View",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="SectionListScreen"
        component={SectionListScreen}
        options={{
          title: "Section List",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="StatusBarScreen"
        component={StatusBarScreen}
        options={{
          title: "Status Bar",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="SwitchScreen"
        component={SwitchScreen}
        options={{
          title: "Switch",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="TextInputScreen"
        component={TextInputScreen}
        options={{
          title: "Text Input",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="TouchableHighlightScreen"
        component={TouchableHighlightScreen}
        options={{
          title: "Touchable Highlight",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="TouchableOpacityScreen"
        component={TouchableOpacityScreen}
        options={{
          title: "Touchable Opacity",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="TouchableWithoutFeedbackScreen"
        component={TouchableWithoutFeedbackScreen}
        options={{
          title: "Touchable Without Feedback",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="VirtualizedListScreen"
        component={VirtualizedListScreen}
        options={{
          title: "Virtualized List",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="InterviewQuestionsScreen"
        component={InterviewQuestionsScreen}
        options={{
          title: "Interview Questions",
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="QuestionDetailScreen"
        component={QuestionDetailScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          title: "Quiz",
          headerLeft: () => <CustomBackButton />,
        }}
      />
    </Stack.Navigator>
  );
}

// Stack Navigator for Interview Questions
function InterviewStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InterviewQuestionsScreen"
        component={InterviewQuestionsScreen}
      />
      <Stack.Screen
        name="QuestionDetailScreen"
        component={QuestionDetailScreen}
      />
    </Stack.Navigator>
  );
}

// Drawer Navigator (with StackNavigator and InterviewStackNavigator)
function DrawerNavigator() {
  const { width } = useWindowDimensions();
  const drawerWidth = width > 500 ? 320 : "80%";

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: drawerWidth,
          backgroundColor: "#20232a",
        },
        overlayColor: "rgba(0,0,0,0.5)",
        swipeEnabled: true,
        drawerType: "front",
      }}
    >
      <Drawer.Screen
        name="MainStack"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

// App Container
export default function App() {
  const langfuse = getLangfuseClient();
  
  useEffect(() => {
    // Initialize Langfuse session
    langfuse.setSessionId(langfuse.traceId);
    langfuse.trackScreen('App_Launch', {
      timestamp: new Date().toISOString(),
    });
  }, [langfuse]);

  return (
    <Provider store={createStore(counterReducer)}>
      <NavigationContainer
        onStateChange={(state) => {
          // Track screen navigation
          const currentRoute = state.routes[state.index];
          if (currentRoute) {
            langfuse.trackScreen(currentRoute.name, {
              params: currentRoute.params,
            });
          }
        }}
      >
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

// Styles
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#20232a",
    paddingTop: 0,
  },
  drawerHeader: {
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#373b47",
    marginBottom: 12,
    backgroundColor: "#1a1d23",
  },
  drawerTitle: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "800",
    marginTop: 8,
    letterSpacing: 0.5,
  },
  drawerSubtitle: {
    fontSize: 12,
    color: "#b4b4b4",
    fontWeight: "500",
    marginTop: 3,
    letterSpacing: 0.3,
  },
  sectionBlock: {
    marginBottom: 12,
  },
  sectionHeaderTitle: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8a93a5",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginLeft: 16,
    marginBottom: 6,
  },
  menuScroll: {
    flex: 1,
  },
  menuItem: {
    marginHorizontal: 12,
    marginVertical: 3,
    borderRadius: 10,
    backgroundColor: "#282c34",
    borderWidth: 1,
    borderColor: "#373b47",
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "rgba(97, 218, 251, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  menuItemText: {
    flex: 1,
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  menuButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  backButton: {
    padding: 4,
    marginLeft: 2,
  },
});
