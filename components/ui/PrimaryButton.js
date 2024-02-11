import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "black" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "yellow",
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
