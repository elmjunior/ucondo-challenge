import React from "react";
import { Dimensions, Image } from "react-native";
import { Button, Heading, HStack, IconFeather, VStack } from "../../layouts";
import * as WebBrowser from "expo-web-browser";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import Buildings from "../../images/mic.png";

export default function SecondScene() {
  const { width, height } = Dimensions.get("window");
  const onPress = async (link: string) => {
    await WebBrowser.openBrowserAsync(link);
  };
  const navigation = useNavigation();
  return (
    <VStack
      align="flex-start"
      justify="flex-end"
      flex={1}
      style={{ width }}
      p={5}
    >
      <SafeAreaView>
        <Image
          source={Buildings}
          style={{ width, height: height * 0.5 }}
          resizeMode="contain"
        />
        <Heading size="lg">Quem fez isso aqui?</Heading>
        <Button
          colorScheme="transparent"
          onPress={() => onPress("https://www.linkedin.com/in/elmjunior/")}
        >
          <HStack align="center">
            <IconFeather name="linkedin" colorScheme="white" size={24} />
            <Heading size="lg" ml={3}>
              Edilson Junior
            </Heading>
          </HStack>
        </Button>
        <Heading size="lg" mt={5}>
          Tem repositório no github?
        </Heading>
        <Button
          colorScheme="transparent"
          onPress={() =>
            onPress("https://github.com/elmjunior/ucondo-challenge")
          }
        >
          <HStack align="center">
            <IconFeather name="github" colorScheme="white" size={24} />
            <Heading size="lg" ml={3}>
              Com certeza!
            </Heading>
          </HStack>
        </Button>

        <Button
          my={5}
          colorScheme="transparent"
          onPress={() => navigation.navigate("app")}
        >
          <HStack align="center">
            <IconFeather
              name="arrow-right-circle"
              colorScheme="white"
              size={24}
            />
            <Heading size="lg" mx={4}>
              Bora começar então?
            </Heading>
          </HStack>
        </Button>
      </SafeAreaView>
    </VStack>
  );
}
