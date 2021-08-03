import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Creditos , Escolha, Feedback, Perfil } from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="Escolha" component={Escolha} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Creditos" component={Creditos} />
        <Drawer.Screen name="Feedback" component={Feedback} />
      </Drawer.Navigator>
  );
}