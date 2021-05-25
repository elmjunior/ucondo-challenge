import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View, Text } from "react-native";

export default function Search(): JSX.Element {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Text></Text>
    </FormProvider>
  );
}
