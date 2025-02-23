import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/screen";
import SearchBar from "../components/search";
import InfoList from "../components/infoList";
import colors from "../constants/colors";

export default function Main() {
  return (
    <Screen>
      <SearchBar></SearchBar>
      <Text style={styles.text}>Import Updates</Text>
      <InfoList></InfoList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.font,
    fontSize: 40,
    alignSelf: "center",
    marginTop: 20,
  },
});
