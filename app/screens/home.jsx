import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useAnimatedValue,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import Screen from "../components/screen";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { Animated } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function Home() {
  const navigator = useNavigation();
  const planePos = useAnimatedValue(0);
  const planePosUp = useAnimatedValue(0);
  const opacity = useAnimatedValue(0);

  const movePlane = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(planePos, {
      toValue: 350,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const movePlaneUp = () => {
    Animated.timing(planePosUp, {
      toValue: -875,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    movePlaneUp();
    movePlane();
    fadeIn();
  });
  return (
    <Screen>
      <View
        // source={require("../assets/background.png")}
        style={styles.container}
        // imageStyle={{ resizeMode: "contain" }}
      >
        <Text style={styles.text}>SkyWatch</Text>
        <Pressable onPress={() => navigator.navigate("Main")}>
          <Animated.View style={[styles.button, { opacity: opacity }]}>
            <Text style={styles.buttonText}>Learn About Your Flight</Text>
          </Animated.View>
        </Pressable>
        {/* <FontAwesome name="plane" size={24} color="blue" /> */}

        <View style={styles.planeHolder}>
          <Animated.View
            style={{
              transform: [{ translateX: planePos }, { translateY: planePosUp }],
            }}
          >
            <FontAwesome name="plane" size={40} color="blue" />
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                { scaleX: -1 },
                { translateX: planePos },
                { translateY: planePosUp },
              ],
            }}
          >
            <FontAwesome name="plane" size={40} color="blue" />
          </Animated.View>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 350,
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
  container: { alignItems: "center" },
  text: { color: colors.font, fontSize: 60, marginTop: 40 },
  planeHolder: {
    // backgroundColor: "blue",
    height: "50%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    padding: 20,
  },
});
