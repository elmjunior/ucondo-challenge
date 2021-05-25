import styled from "styled-components/native";
import { InputProps } from "./types";

export const Input = styled.TextInput<InputProps>`
  height: 50px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.isInvalid ? props.theme.colors.pink : props.theme.colors.pink};
  padding: 10px;
  color: ${(props) => props.theme.colors.text};
`;
