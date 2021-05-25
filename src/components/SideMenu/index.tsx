import { CustomText, Divider, Heading, HStack, VStack } from "../../layouts";
import React, { useMemo } from "react";
import * as WebBrowser from "expo-web-browser";
import { SafeAreaView, Switch, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import useThemModeContext from "../../hooks/useThemeMode";

export default function SideMenu(): JSX.Element {
  const { themeMode, toogleThemeMode } = useThemModeContext();
  const isEnabled = useMemo(() => themeMode === "dark", [themeMode]);

  const onPress = async () => {
    await WebBrowser.openBrowserAsync(
      `https://github.com/elmjunior/ucondo-challenge`
    );
  };
  return (
    <VStack flex={1} colorScheme="secondary">
      <SafeAreaView style={{ flex: 1 }}>
        <VStack
          colorScheme="transparent"
          p={3}
          justify="space-between"
          flex={1}
        >
          <VStack colorScheme="transparent" p={3}>
            <Heading mb={5} colorScheme="primary">
              uCondo
            </Heading>
            <HStack
              colorScheme="transparent"
              align="center"
              justify="space-between"
            >
              <Switch
                trackColor={{ false: "#767577", true: "#3bd348" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toogleThemeMode}
                value={isEnabled}
              />
              <CustomText size="lg">modo escuro</CustomText>
            </HStack>
          </VStack>
          <VStack colorScheme="transparent">
            <CustomText size="lg" mb={3}>
              uCondo Challenge
            </CustomText>
            <TouchableOpacity onPress={onPress}>
              <CustomText size="md">Github Repository</CustomText>
            </TouchableOpacity>
            <Divider />

            <CustomText size="md" mb={2}>
              Author: Edilson Junior
            </CustomText>
            <CustomText size="md" mb={2}>
              E-mail: elmjunior@gmail.com
            </CustomText>
          </VStack>
        </VStack>
      </SafeAreaView>
    </VStack>
  );
}
