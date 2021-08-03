import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { Perfil } from "../pages";

const Stack = createStackNavigator();

export default function PerfilRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
    
  );
}