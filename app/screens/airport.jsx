import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/screen";
import { useRoute } from "@react-navigation/native";
import SearchBar from "../components/search";
import InfoList from "../components/infoList";
import colors from "../constants/colors";
import impor from "../data/important.json";
import CLE from "../data/CLE.json";
export default function Airport() {
  const route = useRoute();
  const search = route.params.searchItem;
  const [data, setData] = useState(impor);
  useEffect(() => {
    if (search === "CLE") {
      setData(CLE);
    }
    if (search === "CLE") {
      setData(CLE);
    }
    if (search === "CLE") {
      setData(CLE);
    }
  });
  return (
    <Screen>
      <SearchBar></SearchBar>
      <Text
        style={{
          fontSize: 50,
          color: colors.font,
          alignSelf: "center",
          marginTop: 15,
        }}
      >
        {search}
      </Text>
      <InfoList data={data}></InfoList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
