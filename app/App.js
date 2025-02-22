import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const customData = require("./data/test.json");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your appzzz!</Text>
      <StatusBar style="auto" />
      <Text>{customData[0].id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
