import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import LoginRoute from './login.route'
import EscolhaRoute from './escolha.route'
import CadastrarRoute from './cadastrar.route'
<<<<<<< HEAD
import PerfilRoute from './perfil.route'
import CreditosRoute from './creditos.route'
=======
>>>>>>> 3911f45b9b001c763086d7958443cc998d35d839

export default function Routes(){
    return(
        <NavigationContainer>
            <LoginRoute />
            <EscolhaRoute />
            <CadastrarRoute />
<<<<<<< HEAD
            <PerfilRoute />
            <CreditosRoute />
=======
>>>>>>> 3911f45b9b001c763086d7958443cc998d35d839
        </NavigationContainer>
    );
}