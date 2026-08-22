import React from "react";
import { View } from "react-native";
import { ScreenContainer, ScreenHeader, BodyText, CardPressable, CardTitle } from "../components/ui";

const ComponentsScreen = ({ navigation }) => {
  const items = [
    { name: "CoreComponents", label: "Core Components" },
    { name: "AndroidComponents", label: "Android Components" },
    { name: "IOSComponents", label: "iOS Components" },
  ];

  return (
    <ScreenContainer>
      <ScreenHeader title="Core Components" />
      <BodyText style={{ color: "#b4b4b4" }}>
        React Native has many Core Components for everything from controls to
        activity indicators. Here are some essential ones:
      </BodyText>

      <View>
        {items.map((item) => (
          <CardPressable
            key={item.name}
            onPress={() => navigation.navigate(item.name)}
            style={{ paddingVertical: 30, alignItems: "center", justifyContent: "center" }}
          >
            <CardTitle>{item.label}</CardTitle>
          </CardPressable>
        ))}
      </View>
    </ScreenContainer>
  );
};

export default ComponentsScreen;
