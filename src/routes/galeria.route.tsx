import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { Detalhes } from '../pages';
import DrawerStack from "./drawer.routes";

const Stack = createStackNavigator();

export default function GaleriaRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
    
  );
}