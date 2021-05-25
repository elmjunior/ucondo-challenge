import React, { useState } from "react";
import { HStack, IconFeather, CustomText, Button } from "../../layouts";
import { RegisterItem } from "../../types";

export default function ListItem({
  item,
  onPress,
  setItemToRemove,
}: {
  item: RegisterItem;
  onPress(): void;
  setItemToRemove(): void;
}): JSX.Element {
  const color = item.type === "receipt" ? "green" : "orange";

  return (
    <>
      <HStack
        colorScheme="white"
        br={3}
        p={4}
        mb={3}
        align="center"
        justify="space-between"
      >
        <Button onPress={onPress} flex={1} colorScheme="transparent" p={0}>
          <CustomText colorScheme={color} size="lg">
            {`${item.code} - ${item.name}`}
          </CustomText>
        </Button>
        <Button onPress={setItemToRemove} colorScheme="transparent" p={0}>
          <IconFeather name="trash" colorScheme="muted" />
        </Button>
      </HStack>
    </>
  );
}
