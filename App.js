import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { FontAwesome } from "@expo/vector-icons"; // Menu icon import
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Importing Screens
import SplashScreen from "./SplashScreen";
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
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: "#61dafb", fontSize: 16, marginLeft: 10 }}>
        Back
      </Text>
    </TouchableOpacity>
  );
};

// Drawer Navigator
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Custom Drawer Content (with search and navigation buttons)
function CustomDrawerContent(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const screens = [
    {
      name: "Home",
      label: "Home",
      icon: <FontAwesome name="home" size={40} color="#61dafb" />,
    },
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
      icon: <FontAwesome name="sync-alt" size={40} color="#61dafb" />,
    },
    {
      name: "HooksScreen",
      label: "Hooks",
      icon: <MaterialCommunityIcons name="hook" size={40} color="#61dafb" />,
    },
  ];

  const filteredScreens = screens.filter((screen) =>
    screen.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        placeholderTextColor="#ccc"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {filteredScreens.map((screen, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => props.navigation.navigate(screen.name)}
        >
          {screen.icon}
          <Text style={styles.menuItemText}>{screen.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// Menu Button to open Drawer (only for HomeScreen)
function MenuButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <FontAwesome
        name="bars"
        size={24}
        color="#61dafb"
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  );
}

// Stack Navigator for screens
function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="JSXScreen"
        component={JSXScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ComponentsScreen"
        component={ComponentsScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="AndroidComponents"
        component={AndroidComponentsScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="IOSComponents"
        component={IOSComponentsScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="CoreComponents"
        component={CoreComponentsScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ComponentDetail"
        component={ComponentDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="StateManagementScreen"
        component={StateManagementScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="PropsScreen"
        component={PropsScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="LifeCycleScreen"
        component={LifeCycleScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="HooksScreen"
        component={HooksScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ViewScreen"
        component={ViewScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="TextScreen"
        component={TextScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ButtonScreen"
        component={ButtonScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="FlatListScreen"
        component={FlatListScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ImageBackgroundScreen"
        component={ImageBackgroundScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="KeyboardAvoidingViewScreen"
        component={KeyboardAvoidingViewScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="PressableScreen"
        component={PressableScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="RefreshControlScreen"
        component={RefreshControlScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="ScrollViewScreen"
        component={ScrollViewScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="SectionListScreen"
        component={SectionListScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="StatusBarScreen"
        component={StatusBarScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="SwitchScreen"
        component={SwitchScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="TextInputScreen"
        component={TextInputScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="TouchableHighlightScreen"
        component={TouchableHighlightScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="TouchableOpacityScreen"
        component={TouchableOpacityScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="TouchableWithoutFeedbackScreen"
        component={TouchableWithoutFeedbackScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
      <Stack.Screen
        name="VirtualizedListScreen"
        component={VirtualizedListScreen}
        options={{ headerLeft: () => <CustomBackButton /> }}
      />
    </Stack.Navigator>
  );
}

// Drawer Navigator (with Stack Navigator inside it)
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // Disable the header for Drawer Navigator
      }}
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

// Main Application
export default function App() {
  return (
    <Provider store={createStore(counterReducer)}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

// Custom Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#282c34",
  },
  searchBox: {
    width: "80%",
    height: 40,
    backgroundColor: "#3a3f47",
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 60,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#3a3f47",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    width: "90%",
    margin: "auto",
    shadowRadius: 4,
  },
  menuItemText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 15,
  },
});
