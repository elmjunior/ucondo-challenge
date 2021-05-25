import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

import useRequests from "../../hooks/useRequests";
import { VStack } from "../../layouts";
import { RegisterItem } from "../../types";
import Form from "./Form";

export default function Put(): JSX.Element {
  const { poastableItems, createRegister, updateRegister } = useRequests();
  const route = useRoute();
  const params = route.params as { item: RegisterItem };
  const navigation = useNavigation();

  const onSubmit = (variables: RegisterItem) => [
    !!params?.item?.id ? updateRegister(variables) : createRegister(variables),
    navigation.goBack(),
  ];
  return (
    <VStack flex={1}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <VStack colorScheme="secondary" p={5} mt={3} btlr={5} btrr={5} flex={1}>
          <Form onSubmit={onSubmit} defaultValues={params?.item} />
        </VStack>
      </KeyboardAvoidingView>
    </VStack>
  );
}
