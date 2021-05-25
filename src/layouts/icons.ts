import styled from "styled-components/native";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { IconProps } from "./types";

export const Icon = styled(FontAwesome)<IconProps>`
  color: ${(props) =>
    props.theme.colors[props.colorScheme ?? "text"] ?? "text"};
  font-size: ${(props) => (props.size ? `${props.size}px` : "28px")};
  font-weight: 800;
`;
export const IconFeather = styled(Feather)<IconProps>`
  color: ${(props) =>
    props.theme.colors[props.colorScheme ?? "text"] ?? "text"};
  font-size: ${(props) => (props.size ? `${props.size}px` : "28px")};
  font-weight: 800;
`;
export const IconAntDesign = styled(AntDesign)<IconProps>`
  color: ${(props) =>
    props.theme.colors[props.colorScheme ?? "text"] ?? "text"};
  font-size: ${(props) => (props.size ? `${props.size}px` : "28px")};
  font-weight: 800;
`;
