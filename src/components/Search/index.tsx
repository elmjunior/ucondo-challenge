import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import useDataBaseContext from "../../hooks/useDatabaseContext";
import { HStack, IconFeather, Icon } from "../../layouts";
import SearchInputComponent from "./SearchInputComponent";

export default function Search(): JSX.Element {
  const methods = useForm();
  const [clearEnabled, setClearEnabled] = useState(false);
  const { searchItems, getItems } = useDataBaseContext();
  const onSubmit = (variables: { term: string }) => {
    if (variables.term) {
      setClearEnabled(true);
      searchItems(variables.term);
    }
  };
  const onClear = () => [
    getItems(),
    methods.reset({ term: null }),
    setClearEnabled(false),
  ];

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
        {clearEnabled && (
          <TouchableOpacity onPress={onClear}>
            <Icon name="times" size={20} />
          </TouchableOpacity>
        )}
      </HStack>
    </FormProvider>
  );
}
