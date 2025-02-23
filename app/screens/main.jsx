import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/screen";
import SearchBar from "../components/search";
import InfoList from "../components/infoList";

export default function Main() {
  return (
    <Screen>
      <SearchBar></SearchBar>
      <InfoList></InfoList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
