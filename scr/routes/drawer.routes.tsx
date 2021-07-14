import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Fundogaveta } from '../styles/reutilizar';
import { Creditos , Perfil } from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Escolha">
        <Drawer.Screen name="LOGIN" component={===} />
        <Drawer.Screen name="PERFIL" component={Perfil} />
        <Drawer.Screen name="Login" componet={===} />
        <Drawer.screen name="CRÉDITOS" component={Creditos} />
      </Drawer.Navigator>
  );
}