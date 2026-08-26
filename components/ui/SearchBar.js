import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function SearchBar({ value, onChangeText, placeholder = "Search..." }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <FontAwesome
        name="search"
        size={16}
        color={isFocused ? "#61dafb" : "#8a93a5"}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8a93a5"
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {Boolean(value) && (
        <TouchableOpacity onPress={() => onChangeText("")} style={styles.clearButton}>
          <FontAwesome name="times-circle" size={16} color="#8a93a5" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1f26",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
    borderWidth: 1,
    borderColor: "#373b47",
    marginBottom: 12,
  },
  containerFocused: {
    borderColor: "#61dafb",
    backgroundColor: "#20242f",
    shadowColor: "#61dafb",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#ffffff",
    fontSize: 15,
    height: 46,
  },
  clearButton: {
    padding: 4,
    marginLeft: 6,
  },
});

