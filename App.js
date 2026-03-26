import React, { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const { width } = useWindowDimensions();

  const screens = [
    {
      name: "HomeScreen",
      label: "Home",
      icon: <FontAwesome name="home" size={32} color="#61dafb" />,
    },
    {
      name: "JSXScreen",
      label: "JSX",
      icon: <FontAwesome name="code" size={32} color="#61dafb" />,
    },
    {
      name: "ComponentsScreen",
      label: "Components",
      icon: <FontAwesome name="cogs" size={32} color="#61dafb" />,
    },
    {
      name: "StateManagementScreen",
      label: "State Management",
      icon: <FontAwesome name="sitemap" size={32} color="#61dafb" />,
    },
    {
      name: "PropsScreen",
      label: "Props",
      icon: <MaterialCommunityIcons name="link" size={32} color="#61dafb" />,
    },
    {
      name: "LifeCycleScreen",
      label: "LifeCycle",
      icon: <FontAwesome6 name="infinity" size={24} color="#61dafb" />,
    },
    {
      name: "HooksScreen",
      label: "Hooks",
      icon: <MaterialCommunityIcons name="hook" size={32} color="#61dafb" />,
    },
    {
      name: "InterviewQuestionsScreen",
      label: "Interview Questions",
      icon: <FontAwesome name="question" size={32} color="#61dafb" />,
    },
  ];

  const filteredScreens = screens.filter((screen) =>
    screen.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.drawerContainer} edges={["top"]}>
      <View style={styles.drawerHeader}>
        <MaterialCommunityIcons name="react" size={50} color="#61dafb" />
        <Text style={styles.drawerTitle}>React Native</Text>
        <Text style={styles.drawerSubtitle}>Learning Hub</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <FontAwesome
          name="search"
          size={20}
          color="#61dafb"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBox}
          placeholder="Search..."
          placeholderTextColor="#999"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <ScrollView
        style={styles.menuScroll}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {filteredScreens.map((screen, index) => (
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
              <FontAwesome name="angle-right" size={20} color="#999" />
            </View>
          </TouchableOpacity>
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
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          minHeight:
            Platform.OS === "android"
              ? 56 + (StatusBar.currentHeight || 0)
              : 56,
          overflow: "visible",
        },
        headerTitleStyle: {
          color: "#333",
          fontSize: 18,
          fontWeight: "600",
          lineHeight: 22,
        },
        headerTitleContainerStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingTop:
            Platform.OS === "android"
              ? StatusBar.currentHeight
                ? StatusBar.currentHeight / 2
                : 0
              : 0,
          left: 0,
          right: 0,
        },
        headerLeftContainerStyle: {
          paddingLeft: 8,
          alignItems: "center",
          justifyContent: "center",
          paddingTop:
            Platform.OS === "android"
              ? StatusBar.currentHeight
                ? StatusBar.currentHeight / 2
                : 0
              : 0,
        },
        headerTintColor: "#61dafb",
        cardStyle: { backgroundColor: "#fff" },
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
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: "80%",
          backgroundColor: "#fff",
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
  return (
    <Provider store={createStore(counterReducer)}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

// Styles
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
  },
  drawerHeader: {
    alignItems: "center",
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    marginBottom: 20,
    backgroundColor: "#f8f9fa",
  },
  drawerTitle: {
    fontSize: 26,
    color: "#1a1a1a",
    fontWeight: "800",
    marginTop: 15,
    letterSpacing: 0.5,
  },
  drawerSubtitle: {
    fontSize: 14,
    color: "#6c757d",
    fontWeight: "500",
    marginTop: 6,
    letterSpacing: 0.3,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  searchIcon: {
    marginRight: 12,
  },
  searchBox: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    height: 50,
  },
  menuScroll: {
    flex: 1,
  },
  menuItem: {
    marginHorizontal: 12,
    marginVertical: 5,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e9ecef",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: "#2c3e50",
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
