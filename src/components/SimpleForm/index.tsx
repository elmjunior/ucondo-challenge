/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from "react";

import { TextInputProps } from "react-native";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import SimpleDropdown from "../SimpleDropdown";
import { HStack, Divider, VStack } from "../../layouts";
type RenderTypes = "checkboxes" | "input" | "dropdown";

export interface InputField extends TextInputProps {
  renderType?: RenderTypes;
  name: string;
  options?: Record<string, any>[];
  customComponent?: ({ options }: any) => JSX.Element;
  label?: string;
  controller?: { key: string; name: string };
  md?: 100 | 50 | 33 | 25 | 75 | 66;
  customChange?(value: any): void;
  isRequired?: boolean;
  defaultValue?: any;
  hidden?: boolean;
}

interface SimpleFormProps {
  onSubmit(values: unknown): unknown;
  isLoading?: boolean;
  fields: InputField[];
  saveButtonLabel?: string;
  defaultValues?: { [x: string]: any } | undefined;
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

function SimpleFormContent({
  onSubmit,
  fields,
  isLoading,
  saveButtonLabel,
}: SimpleFormProps) {
  const { handleSubmit } = useFormContext();

  return (
    <VStack p={5} colorScheme="transparent">
      {fields.map((field, key) =>
        field.name === "divider" ? (
          <Divider mb={5} key={`input-${key}`} />
        ) : (
          <RenderInput field={field} key={`input-${key}`} />
        )
      )}

      <HStack w={100} colorScheme="transparent">
        <CustomButton
          w={100}
          isLoading={isLoading}
          colorScheme="green"
          onPress={handleSubmit(onSubmit)}
        >
          {saveButtonLabel ?? "Salvar"}
        </CustomButton>
      </HStack>
    </VStack>
  );
}

export default function SimpleForm(props: SimpleFormProps): JSX.Element {
  const methods = useForm({
    shouldUnregister: false,
    defaultValues: props.defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <SimpleFormContent {...props} />
    </FormProvider>
  );
}
