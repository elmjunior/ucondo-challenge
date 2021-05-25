import { Heading, HStack, Icon, VStack } from "../../layouts";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { DrawerActions } from "@react-navigation/core";

export default function CustomHeader(props: any): JSX.Element {
  const { navigation, scene, name, title } = props;
  const hasBack = useMemo(
    () => navigation.canGoBack() && scene?.route?.name !== "stats",
    [navigation, scene]
  );

  const handlLeftClick = () =>
    hasBack
      ? navigation.goBack()
      : navigation.dispatch(DrawerActions.toggleDrawer());

  if (scene.route.name !== name || props.hideHeader) {
    return <React.Fragment />;
  }
  return (
    <VStack>
      <SafeAreaView>
        <HStack p={3} justify="space-between" align="center">
          <Heading>{title}</Heading>
          <CustomButton colorScheme="transparent" onPress={handlLeftClick}>
            <Icon name={hasBack ? "angle-left" : "bars"} />
          </CustomButton>
        </HStack>
      </SafeAreaView>
    </VStack>
  );
}
