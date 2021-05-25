import React from "react";
import { TouchableOpacity } from "react-native";
import { HStack, IconFeather, CustomText, Button } from "../../layouts";

export default function ListItem({
  item,
  onPress,
}: {
  item: any;
  onPress(): void;
}): JSX.Element {
  return (
    <HStack
      colorScheme="white"
      br={3}
      p={4}
      mb={3}
      align="center"
      justify="space-between"
    >
      <Button onPress={onPress} flex={1} colorScheme="transparent" p={0}>
        <CustomText colorScheme={item.color} size="lg">
          {item.title}
        </CustomText>
      </Button>
      <IconFeather name="trash" colorScheme="muted" />
    </HStack>
  );
}
