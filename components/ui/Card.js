import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    marginTop: 50,
    backgroundColor: "purple",
    borderRadius: 10,
    elevation: 8,
    alignItems: "center",
  },
});
