import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import Cadastrar from "../pages/Cadastrar";

const Stack = createStackNavigator();

export default function CadastrarRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
    </Stack.Navigator>
    
  );
}