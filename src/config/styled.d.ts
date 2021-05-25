import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      green: string;
      orange: string;
      text: string;
      muted: string;
      label: string;
      pink: string;
      white: string;
      transparent: string;
    };
  }
}
