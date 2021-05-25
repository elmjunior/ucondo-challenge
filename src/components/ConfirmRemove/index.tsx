import React from "react";
import { ActivityIndicator } from "react-native";
import {
  IconFeather,
  VStack,
  CustomText,
  Label,
  HStack,
  Button,
  Modal,
} from "../../layouts";

export default function ConfirmRemove({
  item,
  onCancel,
  onConfirm,
  isLoading,
}: {
  item?: any;
  onCancel(): void;
  onConfirm(): void;
  isLoading?: boolean;
}) {
  if (!item?.id) {
    return <React.Fragment />;
  }
  return (
    <Modal
      colorScheme="transparentGray"
      align="center"
      justify="center"
      flex={1}
    >
      <VStack colorScheme="white" p={10} br={3} align="center" justify="center">
        <IconFeather name="trash" size={40} colorScheme="pink" />
        <CustomText size="lg" mt={5} mb={2}>
          Deseja excluir a conta?
        </CustomText>
        <Label size="lg">{item?.title}</Label>
        <HStack
          colorScheme="transparent"
          align="center"
          justify="space-between"
          mt={5}
        >
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <Button colorScheme="transparent" onPress={onCancel}>
                <CustomText colorScheme="pink" size="lg">
                  Não!
                </CustomText>
              </Button>
              <Button
                p={3}
                ml={8}
                colorScheme="pink"
                br={6}
                onPress={onConfirm}
              >
                <CustomText colorScheme="white" size="lg">
                  Com certeza
                </CustomText>
              </Button>
            </>
          )}
        </HStack>
      </VStack>
    </Modal>
  );
}
