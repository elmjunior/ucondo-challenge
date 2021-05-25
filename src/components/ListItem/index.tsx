import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { HStack, IconFeather, CustomText, Button } from "../../layouts";
import ConfirmRemove from "../ConfirmRemove";

export default function ListItem({
  item,
  onPress,
}: {
  item: any;
  onPress(): void;
}): JSX.Element {
  const [itemToRemove, setItemToRemove] = useState<any | undefined>();
  const [isLoading, setLoading] = useState(false);
  const handleRemove = () => {
    setLoading(true);
    setTimeout(() => {
      setItemToRemove(undefined);
    }, 2000);
  };
  return (
    <>
      <ConfirmRemove
        item={itemToRemove}
        onCancel={() => setItemToRemove(undefined)}
        onConfirm={handleRemove}
        isLoading={isLoading}
      />
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
        <Button
          onPress={() => setItemToRemove(item)}
          colorScheme="transparent"
          p={0}
        >
          <IconFeather name="trash" colorScheme="muted" />
        </Button>
      </HStack>
    </>
  );
}
