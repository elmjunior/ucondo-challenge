import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { KeyboardAvoidingView, Alert } from "react-native";

import useRequests from "../../hooks/useRequests";
import { VScroll, VStack } from "../../layouts";
import { RegisterItem } from "../../types";
import Form from "./Form";

export default function Put(): JSX.Element {
  const { createRegister, updateRegister } = useRequests();
  const route = useRoute();
  const params = route.params as { item: RegisterItem };
  const navigation = useNavigation();

  const onSubmit = async (variables: RegisterItem) => {
    const result = !!params?.item?.id
      ? await updateRegister(variables)
      : await createRegister(variables);

    if (result.error) {
      return Alert.alert("Ops!", result.error.message, [{ text: "OK" }], {
        cancelable: false,
      });
    }
    navigation.goBack();
  };
  return (
    <VStack flex={1}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <VStack colorScheme="secondary" p={5} mt={3} btlr={5} btrr={5} flex={1}>
          <VScroll>
            <Form onSubmit={onSubmit} defaultValues={params?.item} />
          </VScroll>
        </VStack>
      </KeyboardAvoidingView>
    </VStack>
  );
}
