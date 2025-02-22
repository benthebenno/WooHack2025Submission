import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import colors from "../constants/colors";
export default function Screen(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.primary,
  },
});
