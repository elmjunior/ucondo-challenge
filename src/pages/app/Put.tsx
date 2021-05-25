import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import SimpleForm, { InputField } from "../../components/SimpleForm";
import { VStack } from "../../layouts";

const fields: InputField[] = [
  {
    name: "parentId",
    label: "Conta pai",
    renderType: "dropdown",
    options: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
    ],
  },
  {
    name: "code",
    label: "Código",
  },
  {
    name: "name",
    label: "Nome",
  },
  {
    name: "type",
    label: "Tipo",
    options: [
      { id: "receipt", name: "Receita" },
      { id: "expense", name: "Despesa" },
    ],
    renderType: "dropdown",
  },
  {
    name: "isSelectable",
    label: "Aceita lançamentos",
    options: [
      { id: "yes", name: "Sim" },
      { id: "no", name: "Não" },
    ],
    renderType: "dropdown",
  },
];

export default function Put(): JSX.Element {
  const onSubmit = () => console.log("asdasd");

  return (
    <VStack flex={1}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <VStack colorScheme="secondary" p={5} mt={3} btl={5} btr={5} flex={1}>
          <SimpleForm onSubmit={onSubmit} fields={fields}></SimpleForm>
        </VStack>
      </KeyboardAvoidingView>
    </VStack>
  );
}
