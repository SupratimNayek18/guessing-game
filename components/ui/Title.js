import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: "#940B92",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "#940B92",
  },
});
