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
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <FlatList
      data={TESTDATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  item: { flex: 1, backgroundColor: "white", margin: 20, borderRadius: 20 },
});
