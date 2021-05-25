import React from "react";
import { Dimensions, Image } from "react-native";
import {
  CustomText,
  Heading,
  HStack,
  IconFeather,
  VStack,
} from "../../layouts";
import Buildings from "../../images/buildings.png";

export default function FirstScene() {
  const { width, height } = Dimensions.get("window");
  return (
    <VStack
      colorScheme="transparent"
      align="flex-start"
      justify="flex-end"
      flex={1}
      style={{ width }}
    >
      <Image
        source={Buildings}
        style={{ width, height: height * 0.5 }}
        resizeMode="contain"
      />
      <HStack
        style={{ width }}
        colorScheme="transparent"
        align="center"
        justify="space-between"
        p={5}
      >
        <VStack colorScheme="transparent">
          <Heading mb={5} colorScheme="primary">
            Hello, Stranger!
          </Heading>
          <CustomText colorScheme="primary">Bem vindo ao app</CustomText>
          <Heading mb={5} colorScheme="primary">
            uCondo Challenge
          </Heading>
        </VStack>
        <IconFeather
          name="arrow-right-circle"
          colorScheme="primary"
          size={50}
        />
      </HStack>
    </VStack>
  );
}
