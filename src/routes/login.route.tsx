import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import {Cadastrar, Escolha, Login} from '../pages';
import DrawerStack from "./drawer.routes";
import { LoginStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator(LoginStackParamList);

export default function LoginRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Escolha" component={Escolha} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
    
  );
}