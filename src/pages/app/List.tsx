import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList } from "react-native";
import ListHeader from "../../components/ListHeader";
import ListItem from "../../components/ListItem";
import Search from "../../components/Search";
import useRequests from "../../hooks/useRequests";

import { VStack } from "../../layouts";

export default function List(): JSX.Element {
  const navigation = useNavigation();
  const { list, isLoading } = useRequests();

  return (
    <VStack flex={1}>
      <Search />
      <VStack colorScheme="secondary" p={5} mt={8} btlr={5} btrr={5} flex={1}>
        <ListHeader />
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              onPress={() =>
                navigation.navigate("put", {
                  item,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </VStack>
    </VStack>
  );
}
