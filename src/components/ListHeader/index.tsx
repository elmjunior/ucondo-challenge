import React from "react";
import useRequests from "../../hooks/useRequests";
import { CustomText, Heading, HStack } from "../../layouts";

export default function ListHeader(): JSX.Element {
  const { list } = useRequests();
  return (
    <HStack
      colorScheme="transparent"
      mb={3}
      align="center"
      justify="space-between"
    >
      <Heading colorScheme="text">Listagem</Heading>
      <CustomText size="lg">
        {list?.length ?? 0} registro{`${list?.length !== 1 ? "s" : ""}`}
      </CustomText>
    </HStack>
  );
}
