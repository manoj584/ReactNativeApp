import React from "react";
import { View, Text } from "react-native";
import { ScreenContainer, ScreenHeader, Card, NumberBadge } from "../components/ui";

const QuestionDetailScreen = ({ route }) => {
  const { category, questions } = route.params;

  return (
    <ScreenContainer style={{ paddingHorizontal: 20 }}>
      <ScreenHeader
        title={`${category} Questions`}
        subtitle={`${questions.length} questions to master`}
      />

      {questions.map((item, index) => (
        <Card key={index}>
          <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 12 }}>
            <NumberBadge number={index + 1} />
            <Text style={{ flex: 1, fontSize: 17, color: "#61dafb", fontWeight: "700", lineHeight: 24 }}>
              {item.question}
            </Text>
          </View>
          <View style={{ paddingLeft: 44, paddingTop: 8 }}>
            <Text style={{ fontSize: 15, color: "#b4b4b4", lineHeight: 22 }}>
              {item.answer}
            </Text>
          </View>
        </Card>
      ))}
    </ScreenContainer>
  );
};

export default QuestionDetailScreen;
