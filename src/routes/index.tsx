import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import LoginRoute from './login.route'

export default function Routes(){
    return(
        <NavigationContainer>
            <LoginRoute />
        </NavigationContainer>
    );
}