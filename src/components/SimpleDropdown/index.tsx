/* eslint-disable @typescript-eslint/no-explicit-any */
import { VStack, Label, CustomText, HStack } from "../../layouts";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import SimpleDropdownButton from "./SimpleDropdownButton";
import { InputField } from "../../types";
interface SimpleDropdownProps extends InputField {
  options?: Record<string, any>[];
  label?: string;
}
export default function SimpleDropdown({
  options,
  label,
  isRequired,
  name,
  customChange,
  customRules,
}: SimpleDropdownProps): JSX.Element {
  const { getValues } = useFormContext();

  return (
    <Controller
      name={name}
      rules={{ required: isRequired, ...customRules }}
      defaultValue={getValues(name) ?? ""}
      render={({ field: { onChange }, formState: { errors } }) => (
        <VStack colorScheme="transparent" mb={5}>
          {label && (
            <HStack
              colorScheme="transparent"
              align="center"
              justify="space-between"
            >
              <Label
                size="md"
                mb={1}
                colorScheme={errors?.[name] ? "pink" : "label"}
              >
                {label}
              </Label>
              {errors?.[name] && (
                <CustomText colorScheme="pink" size="md">
                  {errors?.[name].type === "validate"
                    ? "tipo diferente da conta pai"
                    : "obrigatório"}
                </CustomText>
              )}
            </HStack>
          )}

          <SimpleDropdownButton
            options={options ?? []}
            onChange={(id) => [
              onChange(id),
              customChange?.(options.find((option) => option.id === id)),
            ]}
            name={name}
          />
        </VStack>
      )}
    />
  );
}
