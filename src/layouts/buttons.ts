import styled from "styled-components/native";
import { ButtonProps } from "./types";

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) =>
    props.theme.colors[props.colorScheme ?? "green"] ?? "green"};
  border-radius: 5px;
  ${(props) => (props.w ? `width: ${props.w}%` : undefined)};
  ${(props) => (props.flex ? `flex: ${props.flex}%` : undefined)};
  ${(props) => (props.p ? `padding: ${props.p * 5}px` : `10px`)};
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
`;
