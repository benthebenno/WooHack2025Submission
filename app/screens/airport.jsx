import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/screen";
import { useRoute } from "@react-navigation/native";
import SearchBar from "../components/search";
import InfoList from "../components/infoList";
export default function Airport() {
  const route = useRoute();
  const search = route.params.searchItem;
  return (
    <Screen>
      <SearchBar></SearchBar>
      <Text
        style={{
          fontSize: 50,
          color: "white",
          alignSelf: "center",
          marginTop: 15,
        }}
      >
        {search}
      </Text>
      <InfoList></InfoList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
