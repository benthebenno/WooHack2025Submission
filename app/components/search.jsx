import {
  View,
  Text,
  container,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import colors from "../constants/colors";
import { Animated } from "react-native";
import { useAnimatedValue } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function SearchBar() {
  const navigation = useNavigation();
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
    setTimeout(
      () => navigation.navigate("Airport", { searchItem: text }),
      3000
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            marginRight: 20,
          }}
        >
          <Pressable>
            <Ionicons
              name="arrow-back-circle-outline"
              size={36}
              color="black"
            />
          </Pressable>
        </View>
        <TextInput
          placeholder="Search any airport code"
          style={styles.textInput}
          onChangeText={onChangeText}
          value={text}
          onSubmitEditing={() => HasSearched()}
          autoCapitalize="characters"
        ></TextInput>
        <Animated.View
          style={{
            height: "100%",
            justifyContent: "center",
            transform: [{ translateX: planePos }],
            marginLeft: 20,
          }}
        >
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
  textInput: { width: "60%" },
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
