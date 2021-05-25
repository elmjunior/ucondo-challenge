export type FontSizes = "xxl" | "xl" | "lg" | "md" | "sm";
export type ThemeColorSchemes =
  | "primary"
  | "secondary"
  | "green"
  | "orange"
  | "text"
  | "muted"
  | "label"
  | "white"
  | "pink"
  | "transparent";

interface StackPaddings {
  px?: number;
  py?: number;
  p?: number;
  pb?: number;
  pt?: number;
  pr?: number;
  pl?: number;
}
interface StackMargins {
  mx?: number;
  my?: number;
  m?: number;
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
}
interface StackBorderRadius {
  br?: number;
}
interface StackFlex {
  align?: "center" | "flex-end" | "flex-start";
  justify?: "center" | "space-between" | "flex-start" | "flex-end";
  flex?: number;
  overflow?: "hidden";
}
interface ColorSchema {
  colorScheme?: ThemeColorSchemes;
}

interface FontSize {
  size?: FontSizes;
}

export interface StackProps
  extends StackPaddings,
    StackMargins,
    StackFlex,
    ColorSchema,
    StackBorderRadius {
  w?: number;
}

export interface InputProps {
  isInvalid?: boolean;
}

export interface ButtonProps extends ColorSchema, StackMargins {
  w?: number;
}
export type IconProps = ColorSchema & FontSize;
export type CustomTextProps = ColorSchema &
  FontSize &
  StackMargins &
  StackPaddings;
