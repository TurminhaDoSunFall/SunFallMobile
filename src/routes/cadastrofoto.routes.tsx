import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { MinhaGaleria } from '../pages';
import Gaveta from "./drawer.routes";

const Stack = createStackNavigator();

export default function CadastrofotoRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MinhaGaleria" component={MinhaGaleria} />
      <Stack.Screen name="DrawerStack" component={Gaveta} />
    </Stack.Navigator>
    
  );
}