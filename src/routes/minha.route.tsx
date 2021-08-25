import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { Editar } from '../pages';
import DrawerStack from "./drawer.routes";

const Stack = createStackNavigator();

export default function MinhaRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Editar" component={Editar} />
    </Stack.Navigator>
    
  );
}