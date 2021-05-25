import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./src/config/themes";
import useThemeModeContext, {
  ThemeModeProvider,
} from "./src/hooks/useThemeMode";
import Routes from "./src/Routes";
import { RequestsProvider } from "./src/hooks/useRequests";
import { DataBaseProvider } from "./src/hooks/useDatabaseContext";

function AppContent(): JSX.Element {
  const { themeMode } = useThemeModeContext();
  return (
    <>
      <StatusBar barStyle={"light-content"} />

      <ThemeProvider theme={themeMode === "light" ? lightMode : darkMode}>
        <RequestsProvider>
          <Routes />
        </RequestsProvider>
      </ThemeProvider>
    </>
  );
}
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ActionSheetProvider>
        <ThemeModeProvider>
          <DataBaseProvider>
            <AppContent />
          </DataBaseProvider>
        </ThemeModeProvider>
      </ActionSheetProvider>
    </NavigationContainer>
  );
}
