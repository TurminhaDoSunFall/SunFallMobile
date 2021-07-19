import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import LoginRoute from './login.route'
import EscolhaRoute from './escolha.route'
import CadastrarRoute from './cadastrar.route'

export default function Routes(){
    return(
        <NavigationContainer>
            <LoginRoute />
            <EscolhaRoute />
            <CadastrarRoute />
        </NavigationContainer>
    );
}