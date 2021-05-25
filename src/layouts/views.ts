import styled from "styled-components/native";
import { StackProps } from "./types";
export const CenteredContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

const Stack = styled.View<StackProps>`
  background-color: ${(props) => {
    if (props.colorScheme) {
      return (
        props.theme.colors[props.colorScheme ?? "background"] ?? "background"
      );
    }
    return props.theme.colors.primary;
  }};

  ${(props) => (props.w ? `width: ${props.w}%` : undefined)};
  ${(props) => (props.flex ? `flex: ${props.flex}%` : undefined)};

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

  ${(props) => (props.p ? `padding: ${props.p * 5}px` : undefined)};
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

  ${(props) => (props.align ? `align-items: ${props.align}` : undefined)};
  ${(props) =>
    props.justify ? `justify-content: ${props.justify}` : undefined};

  ${(props) => (props.br ? `border-radius: ${props.br * 5}px` : undefined)};
  ${(props) =>
    props.btr ? `border-top-right-radius: ${props.btr * 5}px` : undefined};
  ${(props) =>
    props.btl ? `border-top-left-radius: ${props.btl * 5}px` : undefined};

  ${(props) => (props.overflow ? `overflow: ${props.overflow}` : undefined)};
`;

export const HStack = styled(Stack)`
  flex-direction: row;
`;

export const VStack = styled(Stack)`
  flex-direction: column;
`;
export const VScroll = styled.ScrollView``;
export const Box = styled(Stack)``;

export const Divider = styled(Stack)`
  height: 1px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;
  margin-bottom: 20px;
`;
