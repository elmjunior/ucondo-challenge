import { useRoute } from "@react-navigation/core";
import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { View, Text, TextInputProps } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SimpleDropdown from "../../components/SimpleDropdown";
import useCodes from "../../hooks/useCodes";
import useRequests from "../../hooks/useRequests";
import { HStack, VStack } from "../../layouts";
import { InputField, RegisterItem } from "../../types";

interface FromProps {
  onSubmit(item: RegisterItem): void;
  defaultValues?: RegisterItem;
}

const RenderInput: React.FC<{ field: InputField }> = ({ field }) => {
  if (field.customComponent) {
    return <field.customComponent {...field} />;
  }
  if (!field.name) {
    return <React.Fragment />;
  }

  switch (field.renderType) {
    case "dropdown":
      return <SimpleDropdown {...field} />;

    default:
      return <CustomInput {...field} />;
  }
};

function FormContent({ onSubmit }: FromProps): JSX.Element {
  const { poastableItems } = useRequests();
  const route = useRoute();
  const { handleSubmit, setValue } = useFormContext();
  const params = route.params as { item: RegisterItem };
  const { getCode } = useCodes();
  const customChange = async (item: RegisterItem) => {
    const newCode = await getCode(item);
    setValue("code", newCode);
  };
  const fields: InputField[] = [
    {
      name: "parentId",
      label: "Conta pai",
      renderType: "dropdown",
      options:
        poastableItems
          ?.filter((item) => item.id !== params?.item?.id)
          .map((item) => ({
            ...item,
            name: `${item.code} - ${item.name}`,
          })) ?? [],
      customChange,
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
      name: "acceptPosting",
      label: "Aceita lançamentos",
      options: [
        { id: "yes", name: "Sim" },
        { id: "no", name: "Não" },
      ],
      renderType: "dropdown",
      isRequired: true,
    },
  ];
  return (
    <VStack p={5} colorScheme="transparent">
      {fields.map((field, key) => (
        <RenderInput field={field} key={`input-${key}`} />
      ))}

      <HStack w={100} colorScheme="transparent">
        <CustomButton
          w={100}
          colorScheme="green"
          onPress={handleSubmit(onSubmit)}
        >
          {"Salvar"}
        </CustomButton>
      </HStack>
    </VStack>
  );
}
export default function Form({ onSubmit, defaultValues }: FromProps) {
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <FormContent onSubmit={onSubmit} />
    </FormProvider>
  );
}
