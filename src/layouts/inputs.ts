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

export const SearchInput = styled(Input)`
  height: 70px;
  background: ${(props) => props.theme.colors.white};
  flex: 1;
  border-radius: 0;
  border: none;
  padding: 10px;
  color: ${(props) => props.theme.colors.text};
`;
