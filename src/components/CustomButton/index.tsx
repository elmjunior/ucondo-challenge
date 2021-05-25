import { ActivityIndicator } from 'react-native';
import React from 'react';
import { Button, Heading, VStack } from '../../layouts';
import { ButtonProps, ThemeColorSchemes } from '../../layouts/types';

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
    <Button {...props} onPress={() => onPress?.()}>
      <VStack colorScheme="transparent" align="center">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Heading size={'lg'} colorScheme="text">
            {children}
          </Heading>
        )}
      </VStack>
    </Button>
  );
};

export default CustomButton;
