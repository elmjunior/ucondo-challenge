import { CustomText, Heading, HStack, VStack } from "../../layouts";
import React, { useMemo } from "react";
import { SafeAreaView, Switch } from "react-native";
import { useNavigation } from "@react-navigation/core";
import useThemModeContext from "../../hooks/useThemeMode";

export default function SideMenu(): JSX.Element {
  const { themeMode, toogleThemeMode } = useThemModeContext();
  const isEnabled = useMemo(() => themeMode === "dark", [themeMode]);
  const navigation = useNavigation();

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
            <Heading mb={5}>uCondo</Heading>
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
        </VStack>
      </SafeAreaView>
    </VStack>
  );
}
