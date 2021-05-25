import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "./pages/main";
import App from "./pages/app";
import Onboarding from "./pages/onboarding";

const Routes: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={() => <React.Fragment />}>
      <Tab.Screen name={"main"} component={Main} />
      <Tab.Screen name={"onboarding"} component={Onboarding} />
      <Tab.Screen name={"app"} component={App} />
    </Tab.Navigator>
  );
};

export default Routes;
