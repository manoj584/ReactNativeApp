import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const KEYWORDS = new Set([
  "const", "let", "var", "function", "return", "import", "export", "from",
  "default", "if", "else", "true", "false", "null", "undefined", "class",
  "extends", "new", "this", "async", "await", "try", "catch"
]);

const HOOKS_AND_APIS = new Set([
  "useState", "useEffect", "useCallback", "useMemo", "useRef", "useContext",
  "useReducer", "useWindowDimensions", "useNavigation", "React", "View",
  "Text", "TouchableOpacity", "ScrollView", "FlatList", "StyleSheet", "Image",
  "Button", "TextInput", "Pressable", "Modal", "StatusBar"
]);

function highlightCode(codeString) {
  if (typeof codeString !== "string") return codeString;

  const lines = codeString.split("\n");

  return lines.map((line, lineIndex) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("//")) {
      return (
        <Text key={lineIndex} style={styles.commentLine}>
          {line}
          {lineIndex < lines.length - 1 ? "\n" : ""}
        </Text>
      );
    }

    const tokenRegex = /(\/\/.*)|(".*?"|'.*?'|`.*?`)|(<\/?[A-Za-z0-9.]+\b\/?>)|(\b\w+\b)|([^\w\s]+)/g;
    let match;
    let lastIndex = 0;
    const lineElements = [];

    while ((match = tokenRegex.exec(line)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        lineElements.push(line.substring(lastIndex, matchIndex));
      }

      const token = match[0];
      const [, comment, str, jsxTag, word] = match;

      if (comment) {
        lineElements.push(
          <Text key={matchIndex} style={styles.commentText}>
            {token}
          </Text>
        );
      } else if (str) {
        lineElements.push(
          <Text key={matchIndex} style={styles.stringText}>
            {token}
          </Text>
        );
      } else if (jsxTag) {
        lineElements.push(
          <Text key={matchIndex} style={styles.jsxTagText}>
            {token}
          </Text>
        );
      } else if (word) {
        if (KEYWORDS.has(word)) {
          lineElements.push(
            <Text key={matchIndex} style={styles.keywordText}>
              {token}
            </Text>
          );
        } else if (HOOKS_AND_APIS.has(word)) {
          lineElements.push(
            <Text key={matchIndex} style={styles.apiText}>
              {token}
            </Text>
          );
        } else if (!isNaN(Number(word))) {
          lineElements.push(
            <Text key={matchIndex} style={styles.numberText}>
              {token}
            </Text>
          );
        } else {
          lineElements.push(token);
        }
      } else {
        lineElements.push(token);
      }

      lastIndex = tokenRegex.lastIndex;
    }

    if (lastIndex < line.length) {
      lineElements.push(line.substring(lastIndex));
    }

    return (
      <Text key={lineIndex}>
        {lineElements}
        {lineIndex < lines.length - 1 ? "\n" : ""}
      </Text>
    );
  });
}

export function CodeBlock({ children, title = "EXAMPLE CODE", style }) {
  return (
    <View style={[styles.exampleBox, style]}>
      <View style={styles.headerBar}>
        <View style={styles.dotsRow}>
          <View style={[styles.dot, { backgroundColor: "#ff5f56" }]} />
          <View style={[styles.dot, { backgroundColor: "#ffbd2e" }]} />
          <View style={[styles.dot, { backgroundColor: "#27c93f" }]} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
        <FontAwesome name="code" size={12} color="#61dafb" />
      </View>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>{highlightCode(children)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleBox: {
    width: "100%",
    backgroundColor: "#14161b",
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#2d313b",
    overflow: "hidden",
  },
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1e222b",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#2d313b",
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  titleText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8a93a5",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  codeContainer: {
    padding: 14,
  },
  codeText: {
    color: "#abb2bf",
    fontSize: 13.5,
    fontFamily: "monospace",
    lineHeight: 20,
  },
  keywordText: {
    color: "#c678dd",
    fontWeight: "600",
  },
  apiText: {
    color: "#61afef",
    fontWeight: "600",
  },
  stringText: {
    color: "#98c379",
  },
  jsxTagText: {
    color: "#e5c07b",
  },
  numberText: {
    color: "#d19a66",
  },
  commentText: {
    color: "#5c6370",
    fontStyle: "italic",
  },
  commentLine: {
    color: "#5c6370",
    fontStyle: "italic",
  },
});

