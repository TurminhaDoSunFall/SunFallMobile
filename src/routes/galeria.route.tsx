import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { Detalhes, Galeria } from '../pages';
import { GaleriaStackParamList } from "../types/ScreenStack.types";


const Stack = createStackNavigator <GaleriaStackParamList>();

export default function GaleriaRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Galeria" component={Galeria} />
    </Stack.Navigator>
    
  );
}