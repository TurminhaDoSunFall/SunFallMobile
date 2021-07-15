import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Fundogaveta } from '../styles/reutilizar';
import { Escolha , Cadastro , Login , Creditos , Perfil } from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="PERFIL" component={Perfil} />
        <Drawer.Screen name="CRÉDITOS" component={Creditos} />
        <Drawer.Screen name="CRÉDITOS" component={Creditos} />
      </Drawer.Navigator>
  );
}