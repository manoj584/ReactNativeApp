import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, Linking, Alert, Dimensions, Platform, StyleSheet, Animated, Easing } from "react-native";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const ReactNativeAPIScreen = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const handleOpenURL = async () => {
    const url = "https://reactnative.dev";
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Error", "Could not open URL");
    }
  };

  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is an alert message",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  };

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="React Native APIs" />

      {/* Linking API */}
      <SubHeader>Linking API:</SubHeader>
      <CodeBlock>{`import { Linking } from 'react-native';

// Open URL
await Linking.openURL('https://reactnative.dev');

// Check if URL can be opened
const canOpen = await Linking.canOpenURL('tel:1234567890');`}</CodeBlock>
      <BodyText>
        <BoldAccent>Linking</BoldAccent> API allows opening external URLs and handling deep links.
        Used for opening websites, phone numbers, emails, and app-specific URLs.
      </BodyText>
      <Button title="Open React Native Docs" onPress={handleOpenURL} color="#61dafb" />

      {/* Alert API */}
      <SubHeader>Alert API:</SubHeader>
      <CodeBlock>{`import { Alert } from 'react-native';

Alert.alert(
  'Alert Title',
  'Alert message',
  [
    { text: 'Cancel', style: 'cancel' },
    { text: 'OK', onPress: () => console.log('OK') },
  ]
);`}</CodeBlock>
      <BodyText>
        <BoldAccent>Alert</BoldAccent> displays native alert dialogs. It's useful for important
        messages, confirmations, and user decisions.
      </BodyText>
      <Button title="Show Alert" onPress={showAlert} color="#61dafb" />

      {/* Dimensions API */}
      <SubHeader>Dimensions API:</SubHeader>
      <CodeBlock>{`import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Listen for dimension changes
Dimensions.addEventListener('change', ({ window }) => {
  console.log('New dimensions:', window);
});`}</CodeBlock>
      <BodyText>
        <BoldAccent>Dimensions</BoldAccent> API provides device dimensions and orientation.
        Essential for responsive design and layout calculations.
      </BodyText>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Width: {dimensions.width}</Text>
        <Text style={styles.infoText}>Height: {dimensions.height}</Text>
        <Text style={styles.infoText}>Platform: {Platform.OS}</Text>
      </View>

      {/* Platform API */}
      <SubHeader>Platform API:</SubHeader>
      <CodeBlock>{`import { Platform } from 'react-native';

Platform.OS === 'ios' ? 'iOS' : 'Android'
Platform.select({
  ios: 'iOS specific',
  android: 'Android specific',
  default: 'Other',
})`}</CodeBlock>
      <BodyText>
        <BoldAccent>Platform</BoldAccent> API provides platform-specific information and methods.
        Essential for conditional rendering and platform-specific code.
      </BodyText>

      {/* Animated API */}
      <SubHeader>Animated API:</SubHeader>
      <CodeBlock>{`import { Animated, Easing } from 'react-native';

const fadeAnim = useRef(new Animated.Value(0)).current;

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 1000,
  easing: Easing.ease,
  useNativeDriver: true,
}).start();`}</CodeBlock>
      <BodyText>
        <BoldAccent>Animated</BoldAccent> API provides smooth animations and transitions.
        Supports complex animations with better performance than CSS animations.
      </BodyText>
      <Animated.View style={[styles.animatedBox, { opacity: fadeAnim }]}>
        <Text style={styles.animatedText}>Animated Box</Text>
      </Animated.View>
      <Button title="Start Animation" onPress={startAnimation} color="#61dafb" />

      {/* AsyncStorage */}
      <SubHeader>AsyncStorage:</SubHeader>
      <CodeBlock>{`import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
await AsyncStorage.setItem('key', 'value');

// Retrieve data
const value = await AsyncStorage.getItem('key');

// Remove data
await AsyncStorage.removeItem('key');`}</CodeBlock>
      <BodyText>
        <BoldAccent>AsyncStorage</BoldAccent> provides persistent key-value storage. It's an
        asynchronous, unencrypted, persistent storage system for small amounts of data.
      </BodyText>

      {/* NetInfo */}
      <SubHeader>NetInfo:</SubHeader>
      <CodeBlock>{`import NetInfo from '@react-native-community/netinfo';

const connectionInfo = await NetInfo.fetch();

if (connectionInfo.isConnected) {
  console.log('Online');
} else {
  console.log('Offline');
}`}</CodeBlock>
      <BodyText>
        <BoldAccent>NetInfo</BoldAccent> API provides network connectivity information.
        Essential for handling offline scenarios and network-dependent features.
      </BodyText>

      {/* Clipboard */}
      <SubHeader>Clipboard API:</SubHeader>
      <CodeBlock>{`import * as Clipboard from 'expo-clipboard';

// Copy to clipboard
await Clipboard.setStringAsync('Hello World');

// Read from clipboard
const text = await Clipboard.getStringAsync();`}</CodeBlock>
      <BodyText>
        <BoldAccent>Clipboard</BoldAccent> API provides read and write access to the system clipboard.
        Useful for copy-paste functionality and sharing data between apps.
      </BodyText>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: "#282c34",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#373b47",
  },
  infoText: {
    color: "#ffffff",
    fontSize: 16,
    marginVertical: 5,
  },
  animatedBox: {
    backgroundColor: "#61dafb",
    padding: 20,
    borderRadius: 8,
    marginVertical: 15,
    alignItems: "center",
  },
  animatedText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ReactNativeAPIScreen;