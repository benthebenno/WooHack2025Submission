import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/screen";
import { useRoute } from "@react-navigation/native";
export default function Airport() {
  const route = useRoute();
  const search = route.params.searchItem;
  return (
    <Screen>
      <Text style={{ fontSize: 50, color: "white" }}>{search}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
