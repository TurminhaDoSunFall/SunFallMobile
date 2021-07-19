import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import {Login} from '../pages';
import {Cadastrar} from '../pages';

const Stack = createStackNavigator();

export default function EscolhaRoute(){
    return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
    </Stack.Navigator>
    );
}