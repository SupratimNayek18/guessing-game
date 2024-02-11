import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "purple",
    padding: deviceWidth < 370 ? 18 : 24,
    margin: deviceWidth < 370 ? 18 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "purple",
    fontSize: deviceWidth < 370 ? 30 : 40,
    fontFamily: "open-sans-bold",
  },
});
