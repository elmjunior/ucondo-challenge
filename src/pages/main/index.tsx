import React from "react";
import { View } from "react-native";
import { VStack, Label } from "../../layouts";

export default function Main(): JSX.Element {
  return (
    <VStack flex={1} align="center" justify="center">
      <Label>MAIN</Label>
    </VStack>
  );
}
