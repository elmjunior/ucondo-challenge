import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList } from "react-native";
import ListHeader from "../../components/ListHeader";
import ListItem from "../../components/ListItem";
import Search from "../../components/Search";

import { CustomText, Heading, HStack, VStack } from "../../layouts";

const data = [
  {
    id: 1,
    title: "1 - Receitas",
    color: "green",
  },
  {
    id: 2,
    title: "2 - Despesas",
    color: "orange",
  },
];

export default function List(): JSX.Element {
  const navigation = useNavigation();
  return (
    <VStack flex={1}>
      <Search />
      <VStack colorScheme="secondary" p={5} mt={8} btl={5} btr={5} flex={1}>
        <ListHeader />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem item={item} onPress={() => navigation.navigate("put")} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </VStack>
    </VStack>
  );
}
