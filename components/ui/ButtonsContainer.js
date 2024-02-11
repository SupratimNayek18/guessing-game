import { StyleSheet, View } from "react-native";

export default function ButtonsContainer({ children }) {
  return <View style={styles.buttonsContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});
