/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Label, VStack } from "../../layouts";
import React from "react";
import {
  Keyboard,
  TextInputBase,
  TouchableWithoutFeedback,
} from "react-native";
import { useFormContext, Controller } from "react-hook-form";
import { InputField } from "../../types";
interface CustomInputProps extends InputField {
  options?: Record<string, any>[];
  label?: string;
}

export default function CustomInput({
  name,
  isRequired,
  defaultValue,
  label,
  hidden,
  keyboardType,
  secureTextEntry,
  placeholder,
  autoCapitalize = "none",
}: CustomInputProps): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: isRequired }}
      defaultValue={defaultValue ?? ""}
      render={({ field: { onChange, onBlur, value } }) => (
        <VStack mb={5} colorScheme="transparent">
          {label && (
            <Label
              size="md"
              mb={1}
              colorScheme={errors?.[name] ? "pink" : "label"}
            >
              {label}
            </Label>
          )}
          {!hidden && (
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
              <Input
                as={TextInputBase}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ?? "default"}
                isInvalid={!!errors?.[name]}
                onBlur={onBlur}
                onChangeText={(inputValue: string) => onChange(inputValue)}
                value={value}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor="#c0c0c0"
              />
            </TouchableWithoutFeedback>
          )}
        </VStack>
      )}
    />
  );
}
