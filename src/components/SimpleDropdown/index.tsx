/* eslint-disable @typescript-eslint/no-explicit-any */
import { VStack, Label } from "../../layouts";
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
}: SimpleDropdownProps): JSX.Element {
  const { getValues } = useFormContext();

  return (
    <Controller
      name={name}
      rules={{ required: isRequired }}
      defaultValue={getValues(name) ?? ""}
      render={({ field: { onChange }, formState: { errors } }) => (
        <VStack colorScheme="transparent" mb={5}>
          {label && (
            <Label
              size="md"
              mb={1}
              colorScheme={errors?.[name] ? "pink" : "label"}
            >
              {label}
            </Label>
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
