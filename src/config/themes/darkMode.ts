import { DefaultTheme } from "styled-components";
import defaultColors from "./defaultColors";

const darkMode: DefaultTheme = Object.freeze({
  colors: {
    primary: "#371452",
    secondary: "#A796C5",
    green: "#116402",
    orange: "#C05821",
    text: "#3D3D4C",
    muted: "#6E6E87",
    label: "#6A6A6A",
    pink: "#FF6680",
    white: "#B2A3CC",
    ...defaultColors,
  },
});

export default darkMode;
