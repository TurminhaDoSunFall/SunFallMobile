import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { MinhaGaleria, Editar } from '../pages';
import { EditarStackParamList } from "../types/ScreenStack.types";


const Stack = createStackNavigator <EditarStackParamList>();

export default function EditarRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MinhaGaleria" component={MinhaGaleria} />
      <Stack.Screen name="Editar" component={Editar} />
    </Stack.Navigator>
    
  );
}