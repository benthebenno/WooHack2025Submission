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
import { Dropdown } from "react-native-element-dropdown";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
export default function SearchBar() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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
      () => navigation.navigate("Airport", { searchItem: value }),
      3000
    );
  };

  const [data, setData] = useState([
    { label: "CLE", value: "CLE" },
    { label: "CAK", value: "CAK" },
    { label: "CMH", value: "CMH" },
  ]);
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
          <Pressable onPress={() => navigation.navigate("Main")}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={36}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.textInput}>
          <DropDownPicker
            open={open}
            value={value}
            items={data}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setData}
            placeholder="Pick An Airport"
            onChangeValue={() => HasSearched()}
          />
        </View>
        <Animated.View
          style={{
            height: "100%",
            justifyContent: "center",
            transform: [{ translateX: planePos }],
            // backgroundColor: "red",
            marginLeft: 20,
          }}
        >
          <FontAwesome5 name="plane" size={24} color={colors.plane} />
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
    backgroundColor: "#d3d3d3",
    paddingLeft: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "black",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "black",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "black",
  },
});
