import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import PerformanceScreen from "../components/MainScreens/PerformanceScreen";
import HomeScreen from "../components/MainScreens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      //<Drawer.Screen name="PerformanceScreen" component={PerformanceScreen} />      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
