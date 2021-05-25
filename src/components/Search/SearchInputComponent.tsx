import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View, Text } from "react-native";
import { SearchInput } from "../../layouts";

export default function SearchInputComponent({
  onSubmit,
}: {
  onSubmit(): void;
}): JSX.Element {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="term"
      defaultValue=""
      render={({ field: { onChange, onBlur, value } }) => (
        <SearchInput
          placeholder="Pesquisar conta"
          onBlur={onBlur}
          onChangeText={(inputValue: string) => onChange(inputValue)}
          value={value}
          onSubmitEditing={onSubmit}
          returnKeyLabel="Buscar"
          returnKeyType="search"
        />
      )}
    />
  );
}
