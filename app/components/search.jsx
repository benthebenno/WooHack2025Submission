import { View, Text, container, StyleSheet, TextInput } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import colors from "../constants/colors";
import { Animated } from "react-native";
import { useAnimatedValue } from "react-native";

export default function SearchBar() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const planePos = useAnimatedValue(0);

  const movePlane = () => {
    Animated.timing(planePos, {
      toValue: 350,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const HasSearched = () => {
    movePlane();
  };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search any airport code"
          style={styles.textInput}
          onChangeText={onChangeText}
          value={text}
          onSubmitEditing={() => HasSearched()}
        ></TextInput>
        <Animated.View style={{ transform: [{ translateX: planePos }] }}>
          <FontAwesome5 name="plane" size={24} color="blue" />
        </Animated.View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: { width: "80%" },
  search: {
    width: "90%",
    backgroundColor: "white",
    paddingLeft: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
  },
});
