import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/screen";
import SearchBar from "../components/search";

export default function Main() {
  return (
    <Screen>
      <SearchBar></SearchBar>
    </Screen>
  );
}

const styles = StyleSheet.create({});
