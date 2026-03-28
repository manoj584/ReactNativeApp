// React JS & React Native Quiz Question Bank
// All questions are specifically about React, React Native, and related concepts

const QUIZ_QUESTIONS = {
  mcq: [
    // ========== React Basics ==========
    {
      question: "What is JSX in React?",
      options: [
        "A JavaScript extension that allows writing HTML-like syntax",
        "A new programming language",
        "A database query language",
        "A CSS preprocessor",
      ],
      correctAnswer: 0,
      topic: "React Basics",
      difficulty: "easy",
      explanation: "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly in JavaScript code.",
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A lightweight copy of the actual DOM kept in memory",
        "A browser extension for React",
        "The actual HTML document",
        "A server-side rendering engine",
      ],
      correctAnswer: 0,
      topic: "React Basics",
      difficulty: "easy",
      explanation: "The virtual DOM is an in-memory representation of the real DOM. React uses it to efficiently update only the changed parts.",
    },
    {
      question: "Which method is used to render a React component to the DOM?",
      options: [
        "React.render()",
        "ReactDOM.createRoot().render()",
        "React.mount()",
        "ReactDOM.display()",
      ],
      correctAnswer: 1,
      topic: "React Basics",
      difficulty: "easy",
      explanation: "In React 18+, ReactDOM.createRoot().render() is used to render components to the DOM.",
    },
    {
      question: "What are props in React?",
      options: [
        "Internal component state",
        "Read-only data passed from parent to child components",
        "CSS properties",
        "Browser properties",
      ],
      correctAnswer: 1,
      topic: "React Basics",
      difficulty: "easy",
      explanation: "Props (properties) are read-only inputs passed from parent to child components.",
    },
    {
      question: "What is the correct way to create a functional component in React?",
      options: [
        "function MyComponent() { return <View /> }",
        "class MyComponent { render() { return <View /> } }",
        "const MyComponent = new Component()",
        "create MyComponent() { return <View /> }",
      ],
      correctAnswer: 0,
      topic: "React Basics",
      difficulty: "easy",
      explanation: "A functional component is simply a JavaScript function that returns JSX.",
    },
    {
      question: "What does the 'key' prop do in React lists?",
      options: [
        "It styles list items",
        "It helps React identify which items have changed, added, or removed",
        "It encrypts the list data",
        "It sorts the list automatically",
      ],
      correctAnswer: 1,
      topic: "React Basics",
      difficulty: "medium",
      explanation: "Keys help React efficiently update lists by identifying which elements changed.",
    },
    {
      question: "What is the difference between state and props?",
      options: [
        "State is mutable and managed within the component; props are immutable and passed from parent",
        "There is no difference",
        "Props are mutable; state is immutable",
        "State is for styling; props are for data",
      ],
      correctAnswer: 0,
      topic: "React Basics",
      difficulty: "medium",
      explanation: "State is internal and mutable via setState/useState. Props are external and read-only.",
    },
    {
      question: "What is conditional rendering in React?",
      options: [
        "Rendering components only on certain devices",
        "Rendering different UI based on conditions using if/ternary/&&",
        "Rendering components with CSS conditions",
        "Server-side rendering",
      ],
      correctAnswer: 1,
      topic: "React Basics",
      difficulty: "easy",
      explanation: "Conditional rendering means showing different components or elements based on a condition.",
    },
    // ========== React Hooks ==========
    {
      question: "Which hook is used to manage state in a functional component?",
      options: ["useEffect", "useState", "useContext", "useMemo"],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "easy",
      explanation: "useState is the primary hook for adding state to functional components.",
    },
    {
      question: "What does useEffect hook do?",
      options: [
        "Manages component state",
        "Performs side effects like API calls, subscriptions, and DOM updates",
        "Creates a new context",
        "Memoizes expensive calculations",
      ],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "easy",
      explanation: "useEffect lets you perform side effects in functional components, similar to lifecycle methods.",
    },
    {
      question: "When does useEffect with an empty dependency array [] run?",
      options: [
        "On every render",
        "Only once when the component mounts",
        "When props change",
        "Never",
      ],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "medium",
      explanation: "An empty dependency array means the effect runs only once after the initial render (mount).",
    },
    {
      question: "What is the purpose of useCallback hook?",
      options: [
        "To manage state",
        "To memoize a callback function to prevent unnecessary re-renders",
        "To create a context",
        "To handle errors",
      ],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "medium",
      explanation: "useCallback returns a memoized version of a callback that only changes if dependencies change.",
    },
    {
      question: "What is the purpose of useMemo hook?",
      options: [
        "To store data in localStorage",
        "To memoize expensive computed values",
        "To create refs",
        "To manage navigation",
      ],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "medium",
      explanation: "useMemo memoizes the result of an expensive computation, recalculating only when dependencies change.",
    },
    {
      question: "What does useRef return?",
      options: [
        "A state variable",
        "A mutable ref object with a .current property",
        "A callback function",
        "A context provider",
      ],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "medium",
      explanation: "useRef returns a mutable object with a .current property that persists across renders.",
    },
    {
      question: "What is useReducer used for?",
      options: [
        "Reducing component size",
        "Managing complex state logic with actions and a reducer function",
        "Reducing API calls",
        "Reducing re-renders",
      ],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "hard",
      explanation: "useReducer is an alternative to useState for complex state logic, similar to Redux patterns.",
    },
    {
      question: "Can you call hooks inside loops or conditions?",
      options: [
        "Yes, anywhere",
        "No, hooks must be called at the top level of a component",
        "Only inside loops",
        "Only inside conditions",
      ],
      correctAnswer: 1,
      topic: "React Hooks",
      difficulty: "medium",
      explanation: "Hooks must follow the Rules of Hooks: only call them at the top level, never inside loops or conditions.",
    },
    // ========== React Native Core ==========
    {
      question: "What is React Native?",
      options: [
        "A CSS framework",
        "A framework for building native mobile apps using React",
        "A backend framework",
        "A database management system",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "React Native is a framework by Meta for building native iOS and Android apps using React and JavaScript.",
    },
    {
      question: "Which component replaces <div> in React Native?",
      options: ["Container", "View", "Section", "Box"],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "View is the fundamental container component in React Native, equivalent to div in web.",
    },
    {
      question: "Which component is used to display text in React Native?",
      options: ["<p>", "<span>", "<Text>", "<Label>"],
      correctAnswer: 2,
      topic: "React Native",
      difficulty: "easy",
      explanation: "In React Native, all text must be wrapped in a <Text> component.",
    },
    {
      question: "What is the difference between ScrollView and FlatList?",
      options: [
        "There is no difference",
        "ScrollView renders all items at once; FlatList renders only visible items (lazy loading)",
        "FlatList cannot scroll",
        "ScrollView is for horizontal only; FlatList is for vertical only",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "medium",
      explanation: "FlatList uses lazy rendering (virtualization) for better performance with large lists.",
    },
    {
      question: "How do you handle touch events in React Native?",
      options: [
        "Using onClick",
        "Using TouchableOpacity, Pressable, or TouchableHighlight with onPress",
        "Using addEventListener",
        "Using onTouch",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "React Native uses TouchableOpacity, Pressable, or similar components with onPress prop.",
    },
    {
      question: "What is the purpose of SafeAreaView in React Native?",
      options: [
        "To add security to the app",
        "To render content within the safe area boundaries of a device (avoiding notches/status bars)",
        "To encrypt data",
        "To create a sandbox environment",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "medium",
      explanation: "SafeAreaView ensures content renders within safe boundaries, avoiding notches and system UI.",
    },
    {
      question: "How do you style components in React Native?",
      options: [
        "Using CSS files",
        "Using StyleSheet.create() with JavaScript objects",
        "Using SCSS",
        "Using HTML style attribute",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "React Native uses StyleSheet.create() with JavaScript objects, not CSS files.",
    },
    {
      question: "What layout system does React Native use?",
      options: [
        "CSS Grid",
        "Flexbox",
        "Float layout",
        "Table layout",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "React Native uses Flexbox for layout, with flexDirection defaulting to 'column'.",
    },
    {
      question: "What is the default flexDirection in React Native?",
      options: ["row", "column", "row-reverse", "column-reverse"],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "medium",
      explanation: "Unlike web CSS where default is 'row', React Native defaults flexDirection to 'column'.",
    },
    {
      question: "Which component is used for text input in React Native?",
      options: ["<input>", "<TextInput>", "<TextField>", "<InputField>"],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "TextInput is the core component for text input in React Native.",
    },
    {
      question: "What does the 'keyExtractor' prop do in FlatList?",
      options: [
        "Extracts keyboard events",
        "Provides a unique key for each item for efficient rendering",
        "Filters items by key",
        "Sorts items by key",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "medium",
      explanation: "keyExtractor tells FlatList how to extract a unique key from each item for efficient updates.",
    },
    {
      question: "What is the purpose of the Image component's 'source' prop?",
      options: [
        "To set the image caption",
        "To specify the image URL or local require path",
        "To set image filters",
        "To set the image border",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "The source prop accepts either {uri: 'url'} for remote images or require('./path') for local images.",
    },
    {
      question: "What is Expo in React Native development?",
      options: [
        "A database tool",
        "A framework and platform that simplifies React Native development with pre-built tools",
        "A CSS library",
        "A testing framework",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "Expo is a platform that provides tools, libraries, and services for building React Native apps faster.",
    },
    {
      question: "What command creates a new Expo project?",
      options: [
        "npm create react-app",
        "npx create-expo-app",
        "expo new project",
        "react-native init",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "npx create-expo-app is the official command to create a new Expo project.",
    },
    // ========== React Navigation ==========
    {
      question: "What is React Navigation used for?",
      options: [
        "Styling components",
        "Routing and navigation between screens in React Native apps",
        "Making API calls",
        "State management",
      ],
      correctAnswer: 1,
      topic: "Navigation",
      difficulty: "easy",
      explanation: "React Navigation is the most popular library for handling navigation in React Native.",
    },
    {
      question: "Which navigator shows screens as a stack (push/pop)?",
      options: [
        "TabNavigator",
        "StackNavigator",
        "DrawerNavigator",
        "SwitchNavigator",
      ],
      correctAnswer: 1,
      topic: "Navigation",
      difficulty: "easy",
      explanation: "Stack Navigator presents screens in a stack where you push new screens and pop to go back.",
    },
    {
      question: "How do you navigate to a screen in React Navigation?",
      options: [
        "window.location.href = '/screen'",
        "navigation.navigate('ScreenName')",
        "Router.push('/screen')",
        "this.goto('ScreenName')",
      ],
      correctAnswer: 1,
      topic: "Navigation",
      difficulty: "easy",
      explanation: "navigation.navigate('ScreenName') is the standard way to navigate between screens.",
    },
    {
      question: "How do you pass parameters to a screen in React Navigation?",
      options: [
        "Using URL query strings",
        "navigation.navigate('Screen', { paramKey: value })",
        "Using localStorage",
        "Using global variables",
      ],
      correctAnswer: 1,
      topic: "Navigation",
      difficulty: "medium",
      explanation: "Parameters are passed as the second argument to navigation.navigate().",
    },
    {
      question: "How do you read navigation params in a screen?",
      options: [
        "this.props.params",
        "route.params",
        "navigation.getParams()",
        "useParams()",
      ],
      correctAnswer: 1,
      topic: "Navigation",
      difficulty: "medium",
      explanation: "In React Navigation, route.params contains the parameters passed to the screen.",
    },
    // ========== State Management ==========
    {
      question: "What is Redux used for in React/React Native?",
      options: [
        "Styling",
        "Predictable global state management",
        "Navigation",
        "Animation",
      ],
      correctAnswer: 1,
      topic: "State Management",
      difficulty: "medium",
      explanation: "Redux provides a centralized store for managing application state in a predictable way.",
    },
    {
      question: "What is Context API in React?",
      options: [
        "An API for making HTTP requests",
        "A way to pass data through the component tree without prop drilling",
        "A database API",
        "A file system API",
      ],
      correctAnswer: 1,
      topic: "State Management",
      difficulty: "medium",
      explanation: "Context API allows passing data deeply through the component tree without manually passing props.",
    },
    {
      question: "What is 'prop drilling' in React?",
      options: [
        "A testing technique",
        "Passing props through multiple levels of components that don't need them",
        "A performance optimization",
        "A way to delete props",
      ],
      correctAnswer: 1,
      topic: "State Management",
      difficulty: "medium",
      explanation: "Prop drilling is when you pass props through many intermediate components just to reach a deeply nested child.",
    },
    {
      question: "What are the three core principles of Redux?",
      options: [
        "Speed, security, simplicity",
        "Single source of truth, state is read-only, changes via pure functions",
        "Components, containers, connectors",
        "Actions, reducers, middleware",
      ],
      correctAnswer: 1,
      topic: "State Management",
      difficulty: "hard",
      explanation: "Redux follows: single source of truth (one store), read-only state, and pure reducer functions.",
    },
    // ========== Advanced React Native ==========
    {
      question: "What is AsyncStorage in React Native?",
      options: [
        "A cloud database",
        "An unencrypted, asynchronous, persistent key-value storage system",
        "A synchronous storage API",
        "A file system API",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "medium",
      explanation: "AsyncStorage is a simple, asynchronous, persistent key-value storage for React Native.",
    },
    {
      question: "What is the purpose of Platform.OS in React Native?",
      options: [
        "To check the operating system version",
        "To determine if the app is running on 'ios' or 'android'",
        "To check internet connectivity",
        "To check battery level",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "medium",
      explanation: "Platform.OS returns 'ios' or 'android', allowing platform-specific code.",
    },
    {
      question: "What is the purpose of the Animated API in React Native?",
      options: [
        "To play GIF files",
        "To create smooth, powerful animations",
        "To animate text content",
        "To record animations",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "medium",
      explanation: "The Animated API provides a powerful system for creating fluid animations in React Native.",
    },
    {
      question: "What is a Bridge in React Native?",
      options: [
        "A UI component",
        "The communication layer between JavaScript and native code",
        "A networking library",
        "A testing tool",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "hard",
      explanation: "The Bridge enables communication between the JavaScript thread and native platform code.",
    },
    {
      question: "What is the new architecture replacing the Bridge in React Native?",
      options: [
        "WebSocket",
        "JSI (JavaScript Interface) with Fabric and TurboModules",
        "GraphQL",
        "REST API",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "hard",
      explanation: "The New Architecture uses JSI for direct communication, Fabric for UI, and TurboModules for native modules.",
    },
    {
      question: "What does 'useNativeDriver: true' do in Animated API?",
      options: [
        "Makes animations run on the UI thread for better performance",
        "Uses CSS animations",
        "Enables hardware acceleration",
        "Disables JavaScript animations",
      ],
      correctAnswer: 0,
      topic: "React Native",
      difficulty: "hard",
      explanation: "useNativeDriver offloads animation to the native UI thread, avoiding JavaScript thread bottlenecks.",
    },
    {
      question: "What is the purpose of StatusBar component in React Native?",
      options: [
        "To create a footer",
        "To control the appearance of the device status bar",
        "To show loading progress",
        "To display notifications",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "StatusBar component lets you control the status bar appearance (color, style, visibility).",
    },
    {
      question: "How do you make an API call in React Native?",
      options: [
        "Using XMLHttpRequest only",
        "Using fetch() or libraries like axios",
        "Using jQuery.ajax()",
        "Using document.fetch()",
      ],
      correctAnswer: 1,
      topic: "React Native",
      difficulty: "easy",
      explanation: "React Native supports the fetch API natively, and you can also use libraries like axios.",
    },
  ],

  fill: [
    {
      question: "The hook ______ is used to manage local state in a functional component.",
      correctAnswer: "useState",
      hint: "Starts with 'use' and ends with 'State'",
      topic: "React Hooks",
      difficulty: "easy",
      explanation: "useState is the primary hook for adding state to functional components.",
    },
    {
      question: "In React Native, ______ is used instead of <div> for layout containers.",
      correctAnswer: "View",
      hint: "A basic building block component",
      topic: "React Native",
      difficulty: "easy",
      explanation: "View is the fundamental container component in React Native.",
    },
    {
      question: "To pass data from parent to child component, we use ______.",
      correctAnswer: "props",
      hint: "Short for properties",
      topic: "React Basics",
      difficulty: "easy",
      explanation: "Props (properties) are used to pass data from parent to child components.",
    },
    {
      question: "The ______ method is used to update state in class components.",
      correctAnswer: "setState",
      hint: "set + State",
      topic: "React Basics",
      difficulty: "easy",
      explanation: "setState() schedules an update to the component's state object.",
    },
    {
      question: "The ______ component is used to display images in React Native.",
      correctAnswer: "Image",
      hint: "Visual media component",
      topic: "React Native",
      difficulty: "easy",
      explanation: "The Image component displays both local and remote images in React Native.",
    },
    {
      question: "The hook ______ is used to perform side effects in functional components.",
      correctAnswer: "useEffect",
      hint: "Starts with 'use' and ends with 'Effect'",
      topic: "React Hooks",
      difficulty: "easy",
      explanation: "useEffect runs side effects like API calls after render.",
    },
    {
      question: "In React Native, ______ is the default flexDirection value.",
      correctAnswer: "column",
      hint: "Vertical direction",
      topic: "React Native",
      difficulty: "medium",
      explanation: "Unlike web CSS (row), React Native defaults flexDirection to column.",
    },
    {
      question: "The ______ hook lets you access context values without nesting consumers.",
      correctAnswer: "useContext",
      hint: "use + Context",
      topic: "React Hooks",
      difficulty: "medium",
      explanation: "useContext provides a cleaner way to consume context values in functional components.",
    },
    {
      question: "In React Navigation, ______.params contains the parameters passed to a screen.",
      correctAnswer: "route",
      hint: "It's a navigation object passed as a prop",
      topic: "Navigation",
      difficulty: "medium",
      explanation: "The route object contains params, name, and key for the current screen.",
    },
    {
      question: "The ______ component in React Native optimizes long lists by rendering only visible items.",
      correctAnswer: "FlatList",
      hint: "It's a list component with lazy loading",
      topic: "React Native",
      difficulty: "medium",
      explanation: "FlatList uses virtualization to render only items currently visible on screen.",
    },
    {
      question: "React Native uses ______ for layout instead of CSS Grid.",
      correctAnswer: "Flexbox",
      hint: "A CSS layout model for one-dimensional layouts",
      topic: "React Native",
      difficulty: "easy",
      explanation: "React Native uses Flexbox for all layout, with column as the default direction.",
    },
    {
      question: "The ______ API is used to detect the platform (iOS/Android) in React Native.",
      correctAnswer: "Platform",
      hint: "Imported from 'react-native'",
      topic: "React Native",
      difficulty: "medium",
      explanation: "Platform.OS returns 'ios' or 'android' for platform-specific behavior.",
    },
  ],

  code: [
    {
      question: "Write a functional component return statement that displays 'Hello World' using React Native's Text component.",
      correctAnswer: "return <Text>Hello World</Text>",
      hint: "Use JSX with the Text component",
      acceptableAnswers: [
        "return <Text>Hello World</Text>",
        "return <Text>Hello World</Text>;",
        "return(<Text>Hello World</Text>)",
        "return (<Text>Hello World</Text>)",
        "return (<Text>Hello World</Text>);",
      ],
      topic: "React Native",
      difficulty: "easy",
      explanation: "A functional component returns JSX. Text component is required for displaying text in React Native.",
    },
    {
      question: "Write the useState hook to create a 'count' state variable initialized to 0.",
      correctAnswer: "const [count, setCount] = useState(0)",
      hint: "Array destructuring with useState",
      acceptableAnswers: [
        "const [count, setCount] = useState(0)",
        "const [count, setCount] = useState(0);",
        "const [count,setCount] = useState(0)",
        "const [count,setCount] = useState(0);",
      ],
      topic: "React Hooks",
      difficulty: "easy",
      explanation: "useState returns an array with [stateValue, setterFunction].",
    },
    {
      question: "Write a useEffect hook that runs only once when the component mounts.",
      correctAnswer: "useEffect(() => { }, [])",
      hint: "Empty dependency array",
      acceptableAnswers: [
        "useEffect(() => { }, [])",
        "useEffect(() => {}, [])",
        "useEffect(()=>{ }, [])",
        "useEffect(()=>{}, [])",
        "useEffect(() => { }, []);",
        "useEffect(() => {}, []);",
      ],
      topic: "React Hooks",
      difficulty: "medium",
      explanation: "An empty dependency array [] means the effect runs only on mount.",
    },
    {
      question: "Write a TouchableOpacity with an onPress that calls a function named 'handlePress'.",
      correctAnswer: "<TouchableOpacity onPress={handlePress}>",
      hint: "Use the onPress prop",
      acceptableAnswers: [
        "<TouchableOpacity onPress={handlePress}>",
        "<TouchableOpacity onPress={handlePress} >",
        "<TouchableOpacity onPress={handlePress}/>",
        "<TouchableOpacity onPress={handlePress} />",
        "<TouchableOpacity onPress={() => handlePress()}>",
      ],
      topic: "React Native",
      difficulty: "easy",
      explanation: "TouchableOpacity accepts onPress for handling touch events.",
    },
    {
      question: "Write the StyleSheet.create call with a container style that has flex: 1.",
      correctAnswer: "StyleSheet.create({ container: { flex: 1 } })",
      hint: "Object inside StyleSheet.create",
      acceptableAnswers: [
        "StyleSheet.create({ container: { flex: 1 } })",
        "StyleSheet.create({container: {flex: 1}})",
        "StyleSheet.create({ container: { flex: 1 } });",
        "StyleSheet.create({container:{flex:1}})",
        "StyleSheet.create({container: { flex: 1 }})",
      ],
      topic: "React Native",
      difficulty: "easy",
      explanation: "StyleSheet.create takes an object of named style definitions.",
    },
    {
      question: "Write the navigation.navigate call to go to a screen named 'Profile' with a userId param of 42.",
      correctAnswer: "navigation.navigate('Profile', { userId: 42 })",
      hint: "Second argument is the params object",
      acceptableAnswers: [
        "navigation.navigate('Profile', { userId: 42 })",
        "navigation.navigate('Profile', {userId: 42})",
        "navigation.navigate('Profile', { userId: 42 });",
        "navigation.navigate('Profile', {userId: 42});",
        "navigation.navigate(\"Profile\", { userId: 42 })",
        "navigation.navigate(\"Profile\", {userId: 42})",
      ],
      topic: "Navigation",
      difficulty: "medium",
      explanation: "navigate() takes the screen name and an optional params object.",
    },
    {
      question: "Write a useState hook to create a 'name' state variable initialized to an empty string.",
      correctAnswer: "const [name, setName] = useState('')",
      hint: "Initialize with empty quotes",
      acceptableAnswers: [
        "const [name, setName] = useState('')",
        "const [name, setName] = useState('');" ,
        "const [name, setName] = useState(\"\")",
        "const [name, setName] = useState(\"\");",
        "const [name,setName] = useState('')",
        "const [name,setName] = useState(\"\")",
      ],
      topic: "React Hooks",
      difficulty: "easy",
      explanation: "useState('') initializes the state with an empty string.",
    },
    {
      question: "Write a TextInput with a placeholder 'Enter name' and an onChangeText that calls setText.",
      correctAnswer: "<TextInput placeholder=\"Enter name\" onChangeText={setText} />",
      hint: "Use placeholder and onChangeText props",
      acceptableAnswers: [
        "<TextInput placeholder=\"Enter name\" onChangeText={setText} />",
        "<TextInput placeholder=\"Enter name\" onChangeText={setText}/>",
        "<TextInput placeholder='Enter name' onChangeText={setText} />",
        "<TextInput placeholder='Enter name' onChangeText={setText}/>",
        "<TextInput onChangeText={setText} placeholder=\"Enter name\" />",
        "<TextInput onChangeText={setText} placeholder='Enter name' />",
      ],
      topic: "React Native",
      difficulty: "medium",
      explanation: "TextInput uses placeholder for hint text and onChangeText for handling input changes.",
    },
  ],
};

// Utility to get random questions
export const getRandomQuestions = (count = 10, difficulty = "mixed", includeBonusRounds = true) => {
  let mcqPool = [...QUIZ_QUESTIONS.mcq];
  let fillPool = [...QUIZ_QUESTIONS.fill];
  let codePool = [...QUIZ_QUESTIONS.code];

  // Filter by difficulty if not mixed
  if (difficulty !== "mixed") {
    mcqPool = mcqPool.filter((q) => q.difficulty === difficulty);
    fillPool = fillPool.filter((q) => q.difficulty === difficulty);
    codePool = codePool.filter((q) => q.difficulty === difficulty);
  }

  // Shuffle
  const shuffle = (arr) => {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  };

  mcqPool = shuffle(mcqPool);
  fillPool = shuffle(fillPool);
  codePool = shuffle(codePool);

  // Select MCQ questions
  const mcqQuestions = mcqPool.slice(0, count).map((q, i) => ({
    ...q,
    id: `mcq-${i}`,
    type: "mcq",
  }));

  let allQuestions = [...mcqQuestions];

  // Add bonus rounds (fill + code)
  if (includeBonusRounds) {
    const bonusFill = fillPool.slice(0, 2).map((q, i) => ({
      ...q,
      id: `fill-${i}`,
      type: "fill",
    }));
    const bonusCode = codePool.slice(0, 2).map((q, i) => ({
      ...q,
      id: `code-${i}`,
      type: "code",
    }));
    allQuestions = [...allQuestions, ...bonusFill, ...bonusCode];
  }

  return allQuestions;
};

export const getTotalQuestionCount = () => {
  return {
    mcq: QUIZ_QUESTIONS.mcq.length,
    fill: QUIZ_QUESTIONS.fill.length,
    code: QUIZ_QUESTIONS.code.length,
    total: QUIZ_QUESTIONS.mcq.length + QUIZ_QUESTIONS.fill.length + QUIZ_QUESTIONS.code.length,
  };
};

export default QUIZ_QUESTIONS;
