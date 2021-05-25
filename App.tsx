import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./src/config/themes";
import createApolloClient from "./src/services/apollo";
import useThemeModeContext, {
  ThemeModeProvider,
} from "./src/hooks/useThemeMode";
import Routes from "./src/Routes";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { ApolloProvider } from "@apollo/client";

const apolloClient = createApolloClient();

function AppContent(): JSX.Element {
  const { themeMode } = useThemeModeContext();
  return (
    <>
      <StatusBar
        barStyle={themeMode === "dark" ? "light-content" : "dark-content"}
      />
      <ThemeProvider theme={themeMode === "light" ? lightMode : darkMode}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
export default function App(): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <ActionSheetProvider>
          <ThemeModeProvider>
            <AppContent />
          </ThemeModeProvider>
        </ActionSheetProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
