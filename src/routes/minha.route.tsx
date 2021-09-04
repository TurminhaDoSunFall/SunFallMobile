import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { Editar } from '../pages';
import Gaveta from "./drawer.routes";

const Stack = createStackNavigator();

export default function MinhaRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Editar" component={Editar} />
      <Stack.Screen name="Gaveta" component={Gaveta} />
    </Stack.Navigator>
    
  );
}