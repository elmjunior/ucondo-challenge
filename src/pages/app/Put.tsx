import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import SimpleForm, { InputField } from "../../components/SimpleForm";
import useRequests, { RegisterItem } from "../../hooks/useRequests";
import { VStack } from "../../layouts";

export default function Put(): JSX.Element {
  const { poastableItems, createRegister } = useRequests();

  const fields: InputField[] = [
    {
      name: "parentId",
      label: "Conta pai",
      renderType: "dropdown",
      options: poastableItems,
    },
    {
      name: "code",
      label: "Código",
      isRequired: true,
    },
    {
      name: "name",
      label: "Nome",
      isRequired: true,
    },
    {
      name: "type",
      label: "Tipo",
      options: [
        { id: "receipt", name: "Receita" },
        { id: "expense", name: "Despesa" },
      ],
      renderType: "dropdown",
      isRequired: true,
    },
    {
      name: "isSelectable",
      label: "Aceita lançamentos",
      options: [
        { id: "yes", name: "Sim" },
        { id: "no", name: "Não" },
      ],
      renderType: "dropdown",
      isRequired: true,
    },
  ];

  const onSubmit = (variables: RegisterItem) => createRegister(variables);
  return (
    <VStack flex={1}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <VStack colorScheme="secondary" p={5} mt={3} btlr={5} btrr={5} flex={1}>
          <SimpleForm onSubmit={onSubmit} fields={fields}></SimpleForm>
        </VStack>
      </KeyboardAvoidingView>
    </VStack>
  );
}
