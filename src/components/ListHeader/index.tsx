import React from "react";
import { CustomText, Heading, HStack } from "../../layouts";

export default function ListHeader(): JSX.Element {
  return (
    <HStack
      colorScheme="transparent"
      mb={3}
      align="center"
      justify="space-between"
    >
      <Heading colorScheme="text">Listagem</Heading>
      <CustomText size="lg">27 registros</CustomText>
    </HStack>
  );
}
