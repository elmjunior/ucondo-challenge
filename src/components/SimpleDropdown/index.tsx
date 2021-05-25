/* eslint-disable @typescript-eslint/no-explicit-any */
import { VStack, Label } from "../../layouts";
import React from "react";
import { InputField } from "../SimpleForm";
import { Controller } from "react-hook-form";
import SimpleDropdownButton from "./SimpleDropdownButton";
interface SimpleDropdownProps extends InputField {
  options?: Record<string, any>[];
  label?: string;
}
export default function SimpleDropdown({
  options,
  label,
  isRequired,
  name,
}: SimpleDropdownProps): JSX.Element {
  return (
    <Controller
      name={name}
      rules={{ required: isRequired }}
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

          <SimpleDropdownButton options={options ?? []} onChange={onChange} />
        </VStack>
      )}
    />
  );
}
