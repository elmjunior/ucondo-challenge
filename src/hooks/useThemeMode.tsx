import React, { useContext, useMemo, useState } from "react";
import { setItem } from "../services/storage";
type ThemeMode = "light" | "dark";
interface ThemModeContextData {
  themeMode: ThemeMode;
  setThemeMode(theme: string): void;
  toogleThemeMode(): void;
}

export const ThemModeContext = React.createContext<ThemModeContextData>(
  {} as ThemModeContextData
);

export const ThemeModeProvider: React.FC = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeMode>("light");

  const setThemeMode = (themeMode: ThemeMode) => {
    setItem("themeMode", themeMode);
    setActiveTheme(themeMode);
  };

  const toogleThemeMode = () => {
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    setThemeMode(newTheme);
  };

  return (
    <ThemModeContext.Provider
      value={{
        themeMode: activeTheme,
        setThemeMode,
        toogleThemeMode,
      }}
    >
      {children}
    </ThemModeContext.Provider>
  );
};

export default function useThemModeContext(): ThemModeContextData {
  return useContext(ThemModeContext);
}
