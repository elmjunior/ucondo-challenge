/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Button, Heading, HStack, Icon } from "../../layouts";
import React, { useEffect, useState } from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useFormContext } from "react-hook-form";

interface SimpleDropdownButtonProps {
  options: Record<string, any>;
  onChange(value?: string | number): void;
  name: string;
}
export default function SimpleDropdownButton({
  options,
  onChange,
  name,
}: SimpleDropdownButtonProps): JSX.Element {
  const [labelName, setLabelName] = useState("Selecione");
  const dropdownOptions: string[] =
    options?.map((option: Record<string, any>) => option.name) ?? [];
  const { showActionSheetWithOptions } = useActionSheet();
  const { getValues, watch } = useFormContext();
  const newValue = watch(name);

  useEffect(() => {
    const defaultValue = getValues(name);
    if (defaultValue) {
      const defaultSelectedOption = options.find(
        (option) => option.id === defaultValue
      );
      defaultSelectedOption && setLabelName(defaultSelectedOption.name);
    }
  }, []);
  useEffect(() => {
    if (newValue) {
      const defaultSelectedOption = options.find(
        (option) => option.id === newValue
      );
      defaultSelectedOption && setLabelName(defaultSelectedOption.name);
    }
  }, [newValue]);

  const handleOpenActionSheet = () =>
    showActionSheetWithOptions(
      {
        options: ["Cancelar", ...dropdownOptions],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        const selectedOption = options?.[buttonIndex - 1];
        if (selectedOption) {
          setLabelName(selectedOption.name);
          onChange(selectedOption.id);
        }
      }
    );

  return (
    <Button colorScheme="white" onPress={handleOpenActionSheet} p={3}>
      <HStack colorScheme="transparent" align="center" justify="space-between">
        <Heading size="md" colorScheme="text">
          {labelName}
        </Heading>
        <Icon name="chevron-down" size={16} />
      </HStack>
    </Button>
  );
}
