import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import Main from "./screens/main";
import Airport from "./screens/airport";

export default function App() {
  // const customData = require("./data/test.json");
  function HomeScreen() {
    return <Home></Home>;
  }
  function MainScreen() {
    return <Main></Main>;
  }

  function InterestingScreen() {
    return <Interesting></Interesting>;
  }
  function AirportScreen() {
    return <Airport></Airport>;
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen
          name="Interesting"
          component={InterestingScreen}
        ></Stack.Screen>
        <Stack.Screen name="Airport" component={AirportScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
