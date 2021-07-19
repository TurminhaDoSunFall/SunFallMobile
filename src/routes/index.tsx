import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import LoginRoute from './login.route'
import EscolhaRoute from './escolha.route'
import CadastrarRoute from './cadastrar.route'
import PerfilRoute from './perfil.route'
import CreditosRoute from './creditos.route'

export default function Routes(){
    return(
        <NavigationContainer>
            <LoginRoute />
            <EscolhaRoute />
            <CadastrarRoute />
            <PerfilRoute />
            <CreditosRoute />
        </NavigationContainer>
    );
}