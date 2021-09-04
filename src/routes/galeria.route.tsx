import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { Detalhes } from '../pages';
import Gaveta from "./drawer.routes";

const Stack = createStackNavigator();

export default function GaleriaRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Gaveta" component={Gaveta} />
    </Stack.Navigator>
    
  );
}