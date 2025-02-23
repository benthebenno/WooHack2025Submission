import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/screen";
import SearchBar from "../components/search";
import InfoList from "../components/infoList";
import colors from "../constants/colors";
import data from "../data/important.json";
export default function Main() {
  return (
    <Screen>
      <SearchBar></SearchBar>
      <Text style={styles.text}>Import Updates</Text>
      <InfoList data={data}></InfoList>
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
