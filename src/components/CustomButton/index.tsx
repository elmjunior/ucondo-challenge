import { ActivityIndicator } from "react-native";
import React from "react";
import { Button, Heading, VStack } from "../../layouts";
import { ButtonProps, ThemeColorSchemes } from "../../layouts/types";

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  onPress?: () => void;
  colorScheme?: ThemeColorSchemes;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isLoading,
  onPress,
  ...props
}) => {
  return (
    <Button {...props} onPress={() => onPress?.()} p={3} colorScheme="primary">
      <VStack colorScheme="transparent" align="center">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Heading size={"lg"} colorScheme="white">
            {children}
          </Heading>
        )}
      </VStack>
    </Button>
  );
};

export default CustomButton;
