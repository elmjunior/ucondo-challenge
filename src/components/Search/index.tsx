import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HStack, IconFeather } from "../../layouts";
import SearchInputComponent from "./SearchInputComponent";

export default function Search(): JSX.Element {
  const methods = useForm();
  const onSubmit = (variables: { term: string }) => {
    if (variables.term) {
      console.log(variables);
    }
  };

  return (
    <FormProvider {...methods}>
      <HStack
        colorScheme="white"
        align="center"
        overflow="hidden"
        br={10}
        mx={3}
        px={5}
      >
        <IconFeather name="search" colorScheme="muted" />
        <SearchInputComponent onSubmit={methods.handleSubmit(onSubmit)} />
      </HStack>
    </FormProvider>
  );
}
