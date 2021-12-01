import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import LoginRoute from './login.route'
import { useAuth } from "../hook/auth";
import Gaveta from "./drawer.routes";

export default function Routes(){
    const { access_token } = useAuth();
    return (
      <NavigationContainer>
        {access_token ? <Gaveta /> : <LoginRoute />}
      </NavigationContainer>
    );
}