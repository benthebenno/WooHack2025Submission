import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { useEffect } from "react";
import data from "../data/test.json";
export default function InfoList({ data }) {
  // console.log(data);

  const Item = ({ title, text }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item title={item.title} text={item.text} />}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    padding: 20,
    borderWidth: 4,
    borderColor: colors.font,
  },
});
