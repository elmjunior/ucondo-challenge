import {
  Button,
  Heading,
  HStack,
  Icon,
  IconAntDesign,
  VStack,
} from "../../layouts";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { DrawerActions } from "@react-navigation/core";

export default function CustomHeader(props: any): JSX.Element {
  const { navigation, scene, name, title } = props;
  const isMainScreen = useMemo(
    () => navigation.canGoBack() && scene?.route?.name === "list",
    [navigation, scene]
  );

  const handlLeftClick = () =>
    isMainScreen
      ? navigation.dispatch(DrawerActions.toggleDrawer())
      : navigation.goBack();

  const handleRightClick = () =>
    isMainScreen ? navigation.navigate("put") : navigation.goBack();

  if (scene.route.name !== name || props.hideHeader) {
    return <React.Fragment />;
  }
  return (
    <VStack>
      <SafeAreaView>
        <HStack p={3} justify="space-between" align="center">
          <HStack align="center">
            <Button colorScheme="transparent" onPress={handlLeftClick}>
              <Icon
                name={isMainScreen ? "bars" : "angle-left"}
                colorScheme="white"
                size={isMainScreen ? 24 : 32}
              />
            </Button>
            <Heading ml={isMainScreen ? 2 : 4}>{title}</Heading>
          </HStack>
          <Button colorScheme="transparent" onPress={handleRightClick}>
            <IconAntDesign
              name={isMainScreen ? "plus" : "check"}
              size={32}
              colorScheme="white"
            />
          </Button>
        </HStack>
      </SafeAreaView>
    </VStack>
  );
}
