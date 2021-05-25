import styled from 'styled-components/native';
import { ButtonProps } from './types';

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) =>
    props.theme.colors[props.colorScheme ?? 'green'] ?? 'green'};
  padding: 10px;
  border-radius: 5px;
  ${(props) => (props.w ? `width: ${props.w}%` : undefined)};
`;
