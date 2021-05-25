import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import SideMenu from "../../components/SideMenu";
import routes from "./routes";
import CustomHeader from "../../components/CustomHeader";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Content(): JSX.Element {
  return (
    <>
      <Stack.Navigator
        initialRouteName={"stats"}
        mode="card"
        headerMode="screen"
      >
        {routes.map((page, key) => (
          <Stack.Screen
            name={page.name}
            component={page.component}
            key={key}
            options={{
              header: (props) => (
                <CustomHeader
                  {...props}
                  name={page.name}
                  title={page.title}
                  hideHeader={page.hideHeader}
                />
              ),
            }}
          />
        ))}
      </Stack.Navigator>
    </>
  );
}
export default function App(): JSX.Element {
  return (
    <>
      <Drawer.Navigator
        drawerPosition="right"
        initialRouteName="dashboard"
        drawerContent={(props: any) => <SideMenu {...props} />}
      >
        <Drawer.Screen name={"dashboard"} component={Content} />
      </Drawer.Navigator>
    </>
  );
}
