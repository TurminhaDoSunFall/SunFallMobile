import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { MinhaGaleria } from '../pages';
import DrawerStack from "./drawer.routes";

const Stack = createStackNavigator();

export default function CadastrofotoRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MinhaGaleria" component={MinhaGaleria} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
    
  );
}