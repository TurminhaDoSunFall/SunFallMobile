import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Creditos from "../pages/Creditos";

const Stack = createStackNavigator();

export default function CreditosRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Creditos" component={Creditos} />
    </Stack.Navigator>
    
  );
}