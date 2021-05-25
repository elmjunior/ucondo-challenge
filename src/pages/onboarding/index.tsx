import React from "react";
import { View, Text } from "react-native";
import OnboardingAnimate from "react-native-onboarding-animate";
import { VStack } from "../../layouts";
import FirstScene from "./FirstScene";
import SecondScene from "./SecondScene";

export default function Onboarding(): JSX.Element {
  let scenes = [
    {
      component: FirstScene,
      backgroundColor: "#fff",
    },
    {
      component: SecondScene,
      backgroundColor: "#fff",
    },
  ];
  return (
    <OnboardingAnimate scenes={scenes} enableBackgroundColorTransition={true} />
  );
}
