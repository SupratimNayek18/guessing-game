import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  number,
  rounds,
  roundsLog,
  startNewGame,
}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highLight}>{++rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highLight}>{number}</Text>
      </Text>
      <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
      <View style={styles.logs}>
        <Text style={styles.logHeading}>Your game logs</Text>
        {roundsLog.map((guess) => (
          <Text key={guess} style={styles.logText}>
            Your phone guessed {guess}
          </Text>
        ))}
      </View>
      {/* <FlatList
        data={roundsLog}
        renderItem={(itemData) => (
          <Text style={styles.logText}>Your phone guessed {itemData.item}</Text>
        )}
        keyExtractor={(item) => item}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 36,
  },
  highLight: {
    fontFamily: "open-sans-bold",
  },
  logs: {
    margin: 36,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "yellow",
    padding: 24,
    alignItems: "center",
  },
  logText: {
    color: "yellow",
    margin: 4,
    fontSize: 15,
  },
  logHeading: {
    color: "yellow",
    marginBottom: 15,
    fontSize: 20,
  },
});
