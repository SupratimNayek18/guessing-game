import { StyleSheet, View } from "react-native";

export default function ButtonContainer({ children }) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
});
