import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import {Cadastrar, Escolha, Login} from '../pages';
import DrawerStack from "./drawer.routes";

const Stack = createStackNavigator();

export default function LoginRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Escolha" component={Escolha} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
    
  );
}