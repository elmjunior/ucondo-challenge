import { DefaultTheme } from "styled-components";
import defaultColors from "./defaultColors";

export const lightMode: DefaultTheme = Object.freeze({
  colors: {
    primary: "#622490",
    secondary: "#F0EDF5",
    green: "#1BA803",
    orange: "#E28856",
    text: "#3D3D4C",
    muted: "#A0A0B2",
    label: "#6A6A6A",
    pink: "#FF6680",
    ...defaultColors,
  },
});

export default lightMode;
