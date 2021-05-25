import styled from "styled-components/native";
import { ButtonProps } from "./types";

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) =>
    props.theme.colors[props.colorScheme ?? "green"] ?? "green"};

  ${(props) =>
    props.br ? `border-radius: ${props.br * 5}px` : "border-radius:  10px"};
  ${(props) => (props.w ? `width: ${props.w}%` : undefined)};
  ${(props) => (props.flex ? `flex: ${props.flex}%` : undefined)};
  ${(props) => (props.p ? `padding: ${props.p * 5}px` : `padding: 10px`)};
  ${(props) => (props.pr ? `padding-right: ${props.pr * 5}px` : undefined)};
  ${(props) => (props.pl ? `padding-left: ${props.pl * 5}px` : undefined)};
  ${(props) => (props.pb ? `padding-bottom: ${props.pb * 5}px` : undefined)};
  ${(props) => (props.pt ? `padding-top: ${props.pt * 5}px` : undefined)};
  ${(props) =>
    props.px
      ? `padding-right: ${props.px * 5}px;padding-left: ${props.px * 5}px `
      : undefined};
  ${(props) =>
    props.py
      ? `padding-top: ${props.py * 5}px;padding-bottom: ${props.py * 5}px `
      : undefined};

  ${(props) => (props.m ? `margin: ${props.m * 5}px` : undefined)};
  ${(props) => (props.mr ? `margin-right: ${props.mr * 5}px` : undefined)};
  ${(props) => (props.ml ? `margin-left: ${props.ml * 5}px` : undefined)};
  ${(props) => (props.mb ? `margin-bottom: ${props.mb * 5}px` : undefined)};
  ${(props) => (props.mt ? `margin-top: ${props.mt * 5}px` : undefined)};
  ${(props) =>
    props.mx
      ? `margin-right: ${props.mx * 5}px;margin-left: ${props.mx * 5}px `
      : undefined};
  ${(props) =>
    props.my
      ? `margin-top: ${props.my * 5}px;margin-bottom: ${props.my * 5}px `
      : undefined};
`;
