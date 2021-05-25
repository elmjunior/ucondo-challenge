import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { VStack } from "../../layouts";
import { getItem, setItem } from "../../services/storage";

export default function Main(): JSX.Element {
  const navigation = useNavigation();
  useEffect(() => {
    async function initApp() {
      const hasAccessed = await getItem("hasAccessed");
      if (hasAccessed) {
        return navigation.navigate("app");
      }

      setItem("hasAccessed", true);
      navigation.navigate("onboarding");
    }
    initApp();
  }, []);
  return (
    <VStack flex={1} align="center" justify="center">
      <ActivityIndicator />
    </VStack>
  );
}
