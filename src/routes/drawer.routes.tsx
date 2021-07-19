import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Fundoro } from '../styles/reutilizar';
import { Creditos , Perfil } from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Fundoro>
      <Drawer.Navigator >
        <Drawer.Screen name="PERFIL" component={Perfil} />
        <Drawer.Screen name="CRÉDITOS" component={Creditos} />
      </Drawer.Navigator>
    </Fundoro>
  );
}