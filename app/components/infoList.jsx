import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

export default function InfoList() {
  const TESTDATA = [
    {
      id: "1",
      title: "Title",
      text: "text fefefkeofkeofkefokefoekfoekf",
    },
    {
      id: "2",
      title: "Title",
      text: "text fefefkeofkeofkefokefoekfoebfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffkf",
    },
    {
      id: "3",
      title: "Title",
      text: "text fefefkeofkeofkebfbfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffokefoekfoekf",
    },
  ];
  const Item = ({ title, text }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
  return (
    <FlatList
      data={TESTDATA}
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
    borderColor: "grey",
  },
});
