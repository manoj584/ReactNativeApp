import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InterviewQuestionsScreen = ({ navigation }) => {
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerSection}>
        <Text style={styles.header}>Interview Questions</Text>
        <Text style={styles.subtitle}>Test your React knowledge</Text>
      </View>

      <View style={styles.cardsContainer}>
        {/* ReactJS Questions Card */}
        <TouchableOpacity
        onPress={() =>
          navigation.navigate("QuestionDetailScreen", {
            category: "ReactJS",
            questions: [
              {
                question: "What is React?",
                answer:
                  "React is a JavaScript library for building user interfaces.",
              },
              {
                question: "What is JSX?",
                answer:
                  "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.",
              },
              {
                question: "What are components in React?",
                answer:
                  "Components are the building blocks of a React application. They allow us to split the UI into independent, reusable pieces.",
              },
              {
                question: "What are props in React?",
                answer:
                  "Props (short for properties) are used to pass data between components in React.",
              },
              {
                question: "What is state in React?",
                answer:
                  "State is an object that determines how the component behaves and how it renders.",
              },
              {
                question: "What is the difference between state and props?",
                answer:
                  "Props are used to pass data to child components, while state is used to manage data within a component.",
              },
              {
                question: "What are functional components?",
                answer:
                  "Functional components are stateless components that are defined as functions.",
              },
              {
                question: "What are class components?",
                answer:
                  "Class components are stateful components defined using ES6 class syntax.",
              },
              {
                question: "What is the Virtual DOM?",
                answer:
                  "The Virtual DOM is a lightweight copy of the actual DOM, used to improve performance by minimizing direct manipulations of the real DOM.",
              },
              {
                question: "What is a React hook?",
                answer:
                  "A React hook is a function that lets you use state and lifecycle features in functional components.",
              },
              {
                question: "What is useState hook?",
                answer:
                  "The useState hook is used to declare state variables in functional components.",
              },
              {
                question: "What is useEffect hook?",
                answer:
                  "The useEffect hook is used for side effects like fetching data or directly interacting with the DOM in functional components.",
              },
              {
                question: "What is useContext hook?",
                answer:
                  "The useContext hook allows you to share data (like state) across components without passing props manually.",
              },
              {
                question: "What is the purpose of the key prop?",
                answer:
                  "The key prop helps React identify which items have changed, added, or removed in a list of elements.",
              },
              {
                question: "What is a controlled component?",
                answer:
                  "A controlled component is an element whose value is controlled by React state.",
              },
              {
                question: "What is an uncontrolled component?",
                answer:
                  "An uncontrolled component is an element that maintains its own state, without being controlled by React.",
              },
              {
                question: "What is the use of React.Fragment?",
                answer:
                  "React.Fragment allows you to group multiple elements without adding extra nodes to the DOM.",
              },
              {
                question: "What are error boundaries in React?",
                answer:
                  "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree.",
              },
              {
                question: "What is the context API?",
                answer:
                  "The Context API allows you to share data across components without having to pass props down manually.",
              },
              {
                question: "What is the difference between React and ReactDOM?",
                answer:
                  "React is the core library for building user interfaces, while ReactDOM provides methods to interact with the DOM.",
              },
              {
                question: "What is the purpose of the render method?",
                answer:
                  "The render method is used to return JSX that defines what the UI should look like.",
              },
              {
                question:
                  "What is the difference between componentDidMount and useEffect?",
                answer:
                  "componentDidMount is a lifecycle method for class components, while useEffect is used in functional components for side effects.",
              },
              {
                question: "What is React Router?",
                answer:
                  "React Router is a library for handling navigation within a React application.",
              },
              {
                question: "What is Server-Side Rendering (SSR)?",
                answer:
                  "SSR is the process of rendering the application on the server and sending a fully rendered page to the client.",
              },
              {
                question: "What is the difference between React and Angular?",
                answer:
                  "React is a library for building user interfaces, while Angular is a full-fledged framework that provides solutions for routing, state management, and more.",
              },
              {
                question: "What is the purpose of shouldComponentUpdate?",
                answer:
                  "shouldComponentUpdate is used to optimize rendering by preventing unnecessary re-renders.",
              },
              {
                question: "What is the purpose of componentWillUnmount?",
                answer:
                  "componentWillUnmount is a lifecycle method used to clean up before a component is removed from the DOM.",
              },
              {
                question: "What is useMemo hook?",
                answer:
                  "useMemo is a hook that helps to memoize values to optimize performance.",
              },
              {
                question: "What is useCallback hook?",
                answer:
                  "useCallback is used to memoize callback functions and prevent unnecessary re-renders.",
              },
              {
                question:
                  "What is the significance of the React Developer Tools?",
                answer:
                  "React Developer Tools is a browser extension that helps you inspect React components, view their props and state, and debug your application.",
              },
              {
                question:
                  "What is the difference between prop drilling and Context API?",
                answer:
                  "Prop drilling is passing props through multiple layers of components, while Context API allows you to share data globally without prop drilling.",
              },
              {
                question: "What is the significance of React StrictMode?",
                answer:
                  "StrictMode is a development tool that helps identify potential problems in an application, like unsafe lifecycle methods.",
              },
              {
                question: "What is React's Concurrent Mode?",
                answer:
                  "Concurrent Mode is an experimental feature that improves the user experience by rendering updates in a non-blocking way.",
              },
              {
                question: "What are refs in React?",
                answer:
                  "Refs are used to directly access a DOM element or a class component instance.",
              },
              {
                question: "What is the purpose of React's PureComponent?",
                answer:
                  "PureComponent is a class component that automatically implements shouldComponentUpdate with a shallow prop and state comparison.",
              },
              {
                question:
                  "What is the difference between React.memo and PureComponent?",
                answer:
                  "React.memo is for functional components, while PureComponent is for class components. Both optimize rendering by doing shallow prop comparisons.",
              },
              {
                question:
                  "What is the significance of the React `forwardRef` API?",
                answer:
                  "The `forwardRef` API allows you to pass a ref to a child component in a functional component.",
              },
              {
                question: "What is React Suspense?",
                answer:
                  "Suspense is a feature that allows you to delay rendering parts of your UI until certain conditions are met, like loading data.",
              },
              {
                question: "What are HOC (Higher-Order Components)?",
                answer:
                  "HOCs are functions that take a component and return a new component with additional props or logic.",
              },
              {
                question: "What is lazy loading in React?",
                answer:
                  "Lazy loading is a technique where components or assets are loaded only when they are needed, reducing the initial loading time.",
              },
              {
                question:
                  "What is the significance of the `dangerouslySetInnerHTML` attribute?",
                answer:
                  "dangerouslySetInnerHTML is used to set HTML content inside a component, but it can lead to security issues like XSS attacks.",
              },
              {
                question: "What is a higher-order component (HOC)?",
                answer:
                  "A higher-order component is a function that takes a component and returns a new component with additional props.",
              },
              {
                question: "What is the purpose of `useLayoutEffect`?",
                answer:
                  "useLayoutEffect is used to run effects that need to happen synchronously before the browser paints the screen.",
              },
              {
                question:
                  "What is the significance of `keyExtractor` in FlatList?",
                answer:
                  "keyExtractor is used to specify a unique key for each item in the list, improving performance.",
              },
              {
                question: "How do you handle forms in React?",
                answer:
                  "Forms are typically handled by using controlled components with React state to manage user inputs.",
              },
              {
                question:
                  "What is the difference between `componentWillReceiveProps` and `getDerivedStateFromProps`?",
                answer:
                  "componentWillReceiveProps is deprecated, while getDerivedStateFromProps is a new lifecycle method used for prop-to-state updates.",
              },
              {
                question: "What are controlled and uncontrolled components?",
                answer:
                  "Controlled components are components whose value is controlled by React state, while uncontrolled components maintain their own internal state.",
              },
              {
                question: "What is the purpose of `useReducer`?",
                answer:
                  "useReducer is used for managing more complex state logic in functional components, especially when state transitions are more complex.",
              },
              {
                question: "What is React Native Web?",
                answer:
                  "React Native Web is a library that enables you to run React Native components on the web.",
              },
              {
                question: "What are dynamic imports in React?",
                answer:
                  "Dynamic imports allow you to load modules asynchronously, improving performance by splitting the code into smaller chunks.",
              },
              {
                question: "What is a lazy-loaded component?",
                answer:
                  "A lazy-loaded component is a component that is only loaded when needed, reducing the initial bundle size.",
              },
              {
                question:
                  "What is the significance of the `useImperativeHandle` hook?",
                answer:
                  "useImperativeHandle allows you to customize the instance value that is exposed to parent components when using refs.",
              },
              {
                question: "What is the `flushSync` method?",
                answer:
                  "flushSync is used to force React to flush state updates synchronously, typically used in special cases when needed.",
              },
              {
                question: "What is React Native's `Linking` module?",
                answer:
                  "The `Linking` module allows your app to interact with external links and apps, such as opening a URL.",
              },
              {
                question: "What are `StyleSheet` objects in React Native?",
                answer:
                  "StyleSheet objects are used to define styles for components in React Native.",
              },
              {
                question:
                  "What are `TouchableOpacity` and `TouchableHighlight`?",
                answer:
                  "TouchableOpacity and TouchableHighlight are components used to create interactive elements that provide feedback when touched.",
              },
              {
                question:
                  "What is the difference between React Native and Flutter?",
                answer:
                  "React Native uses JavaScript and React for building apps, while Flutter uses Dart and is based on a different rendering engine.",
              },
              {
                question:
                  "How do you navigate between screens in React Native?",
                answer:
                  "You can use libraries like React Navigation or React Native Navigation to navigate between screens.",
              },
              {
                question: "How do you handle gestures in React Native?",
                answer:
                  "Gestures can be handled using libraries like React Native Gesture Handler or Gesture Responder System.",
              },
              {
                question: "What is the `SafeAreaView` component?",
                answer:
                  "SafeAreaView ensures that the app's content is rendered inside the safe area boundaries of a device, preventing content from being cut off.",
              },
              {
                question: "What is React Native's `AppRegistry`?",
                answer:
                  "AppRegistry is responsible for registering the root component of a React Native application.",
              },
              {
                question: "What is Hot Reloading?",
                answer:
                  "Hot Reloading allows React Native to update the app in real-time without losing the current state.",
              },
              {
                question: "What is the purpose of `react-native-vector-icons`?",
                answer:
                  "react-native-vector-icons is used to add vector icons to your React Native application.",
              },
              {
                question:
                  "What is the purpose of `AsyncStorage` in React Native?",
                answer:
                  "AsyncStorage is used to persist data locally in a key-value store on the device.",
              },
              {
                question: "What are native modules in React Native?",
                answer:
                  "Native modules are pieces of code written in Java or Objective-C that are exposed to JavaScript.",
              },
              {
                question: "What is the purpose of `ReactNativeBackgroundTask`?",
                answer:
                  "ReactNativeBackgroundTask allows your app to perform tasks in the background, such as fetching data or updating content.",
              },
              {
                question: "How do you test React Native components?",
                answer:
                  "You can use libraries like Jest and React Native Testing Library to test components in React Native.",
              },
              {
                question: "What are native apps?",
                answer:
                  "Native apps are applications developed for a specific platform, like iOS or Android, using platform-specific languages and tools.",
              },
              {
                question: "What is React Native's Bridge?",
                answer:
                  "The Bridge is used to allow communication between JavaScript and native code in React Native.",
              },
              {
                question: "What is `create-react-native-app`?",
                answer:
                  "`create-react-native-app` is a command-line tool to quickly create a new React Native project with no build configuration.",
              },
              {
                question: "How do you use `react-navigation`?",
                answer:
                  "`react-navigation` is a library used to implement navigation within a React Native app, providing navigators for stack, tab, and drawer navigation.",
              },
              {
                question: "What is `react-native-maps`?",
                answer:
                  "`react-native-maps` is a library that allows you to integrate maps into your React Native applications.",
              },
              {
                question: "What is `react-native-firebase`?",
                answer:
                  "`react-native-firebase` is a library for integrating Firebase services into React Native apps.",
              },
              {
                question: "What is React Native's `Geolocation` module?",
                answer:
                  "`Geolocation` is a module that provides access to the device's location services.",
              },
              {
                question:
                  "How do you handle push notifications in React Native?",
                answer:
                  "You can use libraries like `react-native-push-notification` or `react-native-firebase` to handle push notifications.",
              },
              {
                question: "What is the `CameraRoll` API in React Native?",
                answer:
                  "The `CameraRoll` API provides access to the media gallery (photos and videos) on the device.",
              },
              {
                question: "What is `react-native-sound`?",
                answer:
                  "`react-native-sound` is a library for adding sound effects and music playback to your React Native application.",
              },
              {
                question: "How do you debug a React Native app?",
                answer:
                  "You can use the React Native Debugger, Chrome Developer Tools, or logging to debug a React Native application.",
              },
              {
                question: "What is the `react-native-web` library?",
                answer:
                  "`react-native-web` allows you to use React Native components on the web.",
              },
              {
                question: "What is the purpose of `AsyncStorage`?",
                answer:
                  "`AsyncStorage` is used to persist data locally on the device for storage.",
              },
            ],
          })
        }
          style={styles.card}
          activeOpacity={0.7}
        >
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name="react" size={60} color="#61dafb" />
          </View>
          <Text style={styles.cardTitle}>ReactJS Questions</Text>
          <Text style={styles.cardSubtitle}>70+ Questions</Text>
        </TouchableOpacity>

        {/* React Native Questions Card */}
        <TouchableOpacity
        onPress={() =>
          navigation.navigate("QuestionDetailScreen", {
            category: "React Native",
            questions: [
              {
                question: "What is React Native?",
                answer:
                  "React Native is a framework for building mobile applications using JavaScript and React.",
              },
              {
                question:
                  "What are the differences between React Native and React?",
                answer:
                  "React is used for building web applications, while React Native is used for building mobile applications.",
              },
              {
                question: "What is the purpose of StyleSheet in React Native?",
                answer:
                  "StyleSheet is used to define styles in a way similar to CSS but optimized for mobile development.",
              },
              {
                question: "What are the core components of React Native?",
                answer:
                  "Core components include View, Text, Image, ScrollView, TextInput, Button, etc.",
              },
              {
                question: "What is Flexbox in React Native?",
                answer:
                  "Flexbox is a layout system that is used to arrange UI components in a flexible and responsive way.",
              },
              {
                question: "What are props in React Native?",
                answer:
                  "Props are the input properties passed into a component to control its behavior and display.",
              },
              {
                question:
                  "What is the purpose of the TouchableOpacity component?",
                answer:
                  "TouchableOpacity is used to create touchable elements that give feedback when pressed.",
              },
              {
                question:
                  "What is the difference between TouchableOpacity and TouchableHighlight?",
                answer:
                  "TouchableOpacity reduces opacity when pressed, while TouchableHighlight changes the background color.",
              },
              {
                question: "What is the purpose of the FlatList component?",
                answer:
                  "FlatList is a component used for rendering long lists of data efficiently.",
              },
              {
                question: "How can you handle navigation in React Native?",
                answer:
                  "Navigation is handled using libraries like React Navigation or React Native Navigation.",
              },
              {
                question: "What is React Native's bridge?",
                answer:
                  "The bridge is a mechanism that allows JavaScript code to communicate with native code, enabling interaction with native APIs.",
              },
              {
                question:
                  "What is the purpose of the `useEffect` hook in React Native?",
                answer:
                  "`useEffect` is used to perform side effects such as fetching data, adding event listeners, or subscribing to data streams.",
              },
              {
                question: "What is the purpose of the `useState` hook?",
                answer:
                  "`useState` is used to declare state variables in functional components.",
              },
              {
                question:
                  "What are the different types of navigators in React Native?",
                answer:
                  "There are StackNavigator, TabNavigator, DrawerNavigator, and Nested Navigators.",
              },
              {
                question: "What is the purpose of the `useContext` hook?",
                answer:
                  "`useContext` is used to consume values from React's context API.",
              },
              {
                question:
                  "What are the common performance optimizations in React Native?",
                answer:
                  "Optimizations include using PureComponent, FlatList for lists, memoization, lazy loading, and reducing re-renders.",
              },
              {
                question: "How do you debug React Native applications?",
                answer:
                  "Debugging React Native can be done using tools like Chrome Developer Tools, React Native Debugger, and console logging.",
              },
              {
                question:
                  "What is the purpose of React Native's `Text` component?",
                answer: "`Text` is used to display text on the screen.",
              },
              {
                question: "What is `react-native-cli`?",
                answer:
                  "`react-native-cli` is a command-line interface used for setting up and managing React Native projects.",
              },
              {
                question: "What is the role of Redux in React Native?",
                answer:
                  "Redux is used for managing global state in React Native applications.",
              },
              {
                question: "How do you link native modules in React Native?",
                answer:
                  "Native modules can be linked manually or automatically using `react-native link`.",
              },
              {
                question: "What are the advantages of using React Native?",
                answer:
                  "React Native allows you to build cross-platform mobile apps with a single codebase, making it efficient and cost-effective.",
              },
              {
                question: "What are the components of a React Native app?",
                answer:
                  "The components include the app entry point, navigation system, views, and native modules for specific functionality.",
              },
              {
                question: "How does React Native handle styling?",
                answer:
                  "React Native uses a flex-based layout system and styles written in JavaScript that are converted to native styles at runtime.",
              },
              {
                question: "What is the use of `react-navigation`?",
                answer:
                  "`react-navigation` is a popular library used for routing and navigation in React Native apps.",
              },
              {
                question:
                  "What is the difference between Android and iOS development in React Native?",
                answer:
                  "The differences usually arise in the use of native modules and platform-specific styling, but React Native allows code sharing.",
              },
              {
                question: "How do you access device features in React Native?",
                answer:
                  "React Native provides APIs for accessing device features like camera, geolocation, notifications, and more.",
              },
              {
                question: "What is the `Alert` component in React Native?",
                answer:
                  "`Alert` is used to display native dialog boxes for alerting users.",
              },
              {
                question: "How can you optimize images in React Native?",
                answer:
                  "Images can be optimized by using proper formats, compressing them, and using appropriate image resolution for different screen sizes.",
              },
              {
                question: "What are native modules?",
                answer:
                  "Native modules are pieces of code written in Java/Kotlin (for Android) or Objective-C/Swift (for iOS) that can be invoked from JavaScript.",
              },
              {
                question:
                  "How do you handle push notifications in React Native?",
                answer:
                  "Push notifications are handled using libraries like `react-native-push-notification` or `react-native-firebase`.",
              },
              {
                question:
                  "What is the difference between `react-native run-android` and `react-native run-ios`?",
                answer:
                  "`react-native run-android` runs the app on an Android emulator or connected device, while `react-native run-ios` runs the app on an iOS simulator.",
              },
              {
                question: "What is `react-native-webview`?",
                answer:
                  "`react-native-webview` is a component that allows you to display web content in a React Native app.",
              },
              {
                question: "What is `react-native-firebase`?",
                answer:
                  "`react-native-firebase` is a library that enables integration with Firebase services, such as authentication, Firestore, and messaging.",
              },
              {
                question:
                  "What is the difference between functional and class components in React Native?",
                answer:
                  "Functional components are simpler and use hooks, while class components require lifecycle methods for managing state and behavior.",
              },
              {
                question: "What is `react-native-vector-icons`?",
                answer:
                  "`react-native-vector-icons` is a library that provides customizable icons for React Native apps.",
              },
              {
                question: "What is the `useEffect` hook's cleanup function?",
                answer:
                  "The cleanup function is used to clean up any side effects, such as cancelling network requests or unsubscribing from events.",
              },
              {
                question: "What is the `ImageBackground` component?",
                answer:
                  "`ImageBackground` is used to display an image as the background of a view or component.",
              },
              {
                question:
                  "What is the purpose of `useReducer` in React Native?",
                answer:
                  "`useReducer` is used for managing complex state logic, such as when state depends on multiple actions.",
              },
              {
                question:
                  "What are the key benefits of using Redux with React Native?",
                answer:
                  "Redux helps manage global state, allowing predictable and centralized state management, which is beneficial for large apps.",
              },
              {
                question: "What is `react-native-reanimated`?",
                answer:
                  "`react-native-reanimated` is a library for building complex animations in React Native.",
              },
              {
                question: "How do you persist data in React Native?",
                answer:
                  "Data can be persisted in React Native using libraries like `AsyncStorage` or `react-native-mmkv` for local storage.",
              },
              {
                question: "How do you enable debugging in React Native?",
                answer:
                  "You can enable debugging by using the React Native Debugger, Chrome Developer Tools, or by enabling the remote JS debugger.",
              },
              {
                question: "What is `react-native-maps`?",
                answer:
                  "`react-native-maps` is a library for embedding maps and location-based services in React Native applications.",
              },
              {
                question: "What are React Native's bridging concepts?",
                answer:
                  "Bridges are used to link JavaScript code with native modules, allowing React Native apps to access native functionality.",
              },
              {
                question: "How can you handle navigation between screens?",
                answer:
                  "Navigation between screens is done using navigation libraries like React Navigation or React Native Navigation.",
              },
              {
                question:
                  "What are some common challenges in React Native development?",
                answer:
                  "Challenges include dealing with native modules, platform-specific issues, optimizing performance, and debugging on different devices.",
              },
            ],
          })
        }
          style={styles.card}
          activeOpacity={0.7}
        >
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name="cellphone" size={60} color="#61dafb" />
          </View>
          <Text style={styles.cardTitle}>React Native Questions</Text>
          <Text style={styles.cardSubtitle}>50+ Questions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#20232a",
    paddingBottom: 30,
  },
  headerSection: {
    paddingTop: 20,
    paddingBottom: 20,
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
    color: "#b4b4b4",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "400",
  },
  cardsContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  card: {
    backgroundColor: "#282c34",
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "#373b47",
  },
  iconWrapper: {
    marginBottom: 20,
    backgroundColor: "rgba(97, 218, 251, 0.1)",
    borderRadius: 50,
    padding: 20,
  },
  cardTitle: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#b4b4b4",
    textAlign: "center",
    fontWeight: "500",
  },
});
export default InterviewQuestionsScreen;
