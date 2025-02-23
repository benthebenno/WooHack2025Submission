import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Screen from "../components/screen";
import { Pressable } from "react-native";
import { Animated } from "react-native";
import { useAnimatedValue } from "react-native";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function Tutorial() {
  const navigator = useNavigation();
  const opacity = useAnimatedValue(0);
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => fadeIn());

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>
            This program is designed to give you as much information as possible
            about your flight, and the airport you are in. There two screens one
            which gives you import updates from around the country. By selecting
            your airport you will have access to all the air traffic control
            communications. You can search for different communications
            pertaining to your flight.
          </Text>
        </View>
        <View style={{ marginTop: 50 }}></View>
        <Pressable onPress={() => navigator.navigate("Main")}>
          <Animated.View style={[styles.button, { opacity: opacity }]}>
            <Text style={styles.buttonText}>Start Your Adventure</Text>
          </Animated.View>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    // marginTop: 350,
    backgroundColor: colors.font,
    flexShrink: 1,
    // width: 275,
    // height: 65,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 25,
    margin: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  box: { backgroundColor: "white", borderWidth: 2 },
  container: {
    alignItems: "center",
  },
  text: { fontSize: 25 },
});
