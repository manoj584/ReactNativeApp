import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const NavigationPatternsScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Navigation Patterns" />

      {/* Stack Navigation */}
      <SubHeader>Stack Navigation:</SubHeader>
      <CodeBlock>{`import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>`}</CodeBlock>
      <BodyText>
        <BoldAccent>Stack Navigator</BoldAccent> provides a way to transition between screens where
        each new screen is placed on top of a stack. It's the most common navigation pattern for mobile apps.
      </BodyText>

      {/* Tab Navigation */}
      <SubHeader>Tab Navigation:</SubHeader>
      <CodeBlock>{`import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>`}</CodeBlock>
      <BodyText>
        <BoldAccent>Tab Navigator</BoldAccent> allows users to switch between different screens
        using a tab bar. Perfect for apps with multiple main sections or categories.
      </BodyText>

      {/* Drawer Navigation */}
      <SubHeader>Drawer Navigation:</SubHeader>
      <CodeBlock>{`import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<Drawer.Navigator>
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
</Drawer.Navigator>`}</CodeBlock>
      <BodyText>
        <BoldAccent>Drawer Navigator</BoldAccent> provides a slide-out drawer menu, typically
        accessed from the left side of the screen. Great for app navigation and settings.
      </BodyText>

      {/* Navigation Props */}
      <SubHeader>Navigation Props:</SubHeader>
      <CodeBlock>{`const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  );
};`}</CodeBlock>
      <BodyText>
        The <BoldAccent>navigation</BoldAccent> prop provides methods like <BoldAccent>navigate</BoldAccent>,
        <BoldAccent>goBack</BoldAccent>, <BoldAccent>reset</BoldAccent>, and <BoldAccent>replace</BoldAccent> for
        programmatic navigation control.
      </BodyText>

      {/* Route Params */}
      <SubHeader>Route Parameters:</SubHeader>
      <CodeBlock>{`// Navigate with params
navigation.navigate('Details', { itemId: 42 });

// Access params in destination screen
const DetailsScreen = ({ route }) => {
  const { itemId } = route.params;
  return <Text>Item ID: {itemId}</Text>;
};`}</CodeBlock>
      <BodyText>
        Pass data between screens using route parameters. This is essential for
        screen-to-screen communication and dynamic content loading.
      </BodyText>

      {/* Deep Linking */}
      <SubHeader>Deep Linking:</SubHeader>
      <CodeBlock>{`import { Linking } from 'react-native';

useEffect(() => {
  const handleDeepLink = ({ url }) => {
    navigation.navigate('Details', { url });
  };

  Linking.addEventListener('url', handleDeepLink);
  return () => Linking.removeEventListener('url', handleDeepLink);
}, []);`}</CodeBlock>
      <BodyText>
        <BoldAccent>Deep Linking</BoldAccent> allows your app to be opened from external sources
        like URLs, push notifications, or other apps. Configure linking in your navigation structure.
      </BodyText>

      {/* Nested Navigators */}
      <SubHeader>Nested Navigators:</SubHeader>
      <CodeBlock>{`<Stack.Navigator>
  <Stack.Screen name="Tabs" component={TabNavigator} />
  <Stack.Screen name="Settings" component={SettingsScreen} />
</Stack.Navigator>`}</CodeBlock>
      <BodyText>
        Combine different navigation types (stack, tabs, drawer) for complex navigation
        hierarchies. Each navigator maintains its own navigation state.
      </BodyText>

      {/* Navigation State */}
      <SubHeader>Navigation State:</SubHeader>
      <CodeBlock>{`import { useNavigationState } from '@react-navigation/native';

const NavigationAwareComponent = () => {
  const state = useNavigationState(state => state);
  const currentRoute = state.routes[state.index];
  
  return <Text>Current: {currentRoute.name}</Text>;
};`}</CodeBlock>
      <BodyText>
        Use <BoldAccent>useNavigationState</BoldAccent> hook to access the navigation state.
        Useful for tracking user navigation patterns and implementing custom navigation logic.
      </BodyText>

      {/* Custom Header */}
      <SubHeader>Custom Headers:</SubHeader>
      <CodeBlock>{`<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerTitle: () => <CustomTitle />,
    headerRight: () => <HeaderButton />,
    headerStyle: { backgroundColor: '#61dafb' },
    headerTintColor: '#ffffff',
  }}
/>`}</CodeBlock>
      <BodyText>
        Customize navigation headers with custom components, colors, and styles.
        You can also completely hide headers for full-screen experiences.
      </BodyText>

      {/* Navigation Lifecycle */}
      <SubHeader>Navigation Lifecycle:</SubHeader>
      <CodeBlock>{`import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      // Called when screen gains focus
      console.log('Screen focused');
      return () => {
        // Called when screen loses focus
        console.log('Screen unfocused');
      };
    }, [])
  );
  
  return <View />;
};`}</CodeBlock>
      <BodyText>
        <BoldAccent>useFocusEffect</BoldAccent> is similar to useEffect but only runs when the screen
        is focused. Perfect for refreshing data, starting animations, or managing subscriptions.
      </BodyText>

      {/* Authentication Flow */}
      <SubHeader>Authentication Flow:</SubHeader>
      <CodeBlock>{`const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

// Render different stacks based on auth state
<NavigationContainer>
  {isSignedIn ? (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  ) : (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  )}
</NavigationContainer>`}</CodeBlock>
      <BodyText>
        Implement authentication by conditionally rendering different navigation stacks.
        Use a global state management solution to track authentication status.
      </BodyText>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});

export default NavigationPatternsScreen;