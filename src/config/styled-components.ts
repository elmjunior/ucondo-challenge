import * as styledComponents from "styled-components/native";

import ThemeInterface from "./styled";
declare interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    green: string;
    orange: string;
    text: string;
    muted: string;
    label: string;
    pink: string;
    transparent: string;
    transparentGray: string;
  };
}
const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

export { css, ThemeProvider };
export default styled;
