import { StyleSheet, Text } from "react-native";

export default function Instructions({ children, style }) {
  return <Text style={[styles.inputTitle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  inputTitle: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: "yellow",
    fontWeight: "bold",
  },
});
