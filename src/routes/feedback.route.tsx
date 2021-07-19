import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  Feedback from "../pages/Feedback";

const Stack = createStackNavigator();

export default function FeedbackRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name=" Feedback" component={ Feedback} />
    </Stack.Navigator>
    
  );
}