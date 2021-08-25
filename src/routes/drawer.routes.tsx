import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Creditos , Escolha, Feedback, Perfil , Galeria, MinhaGaleria, CadastrarFoto, Config} from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="Escolha" component={Escolha} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Galeria" component={Galeria}/>
        <Drawer.Screen name="Minha Galeria" component={MinhaGaleria}/>
        <Drawer.Screen name="Cadastrar foto" component={CadastrarFoto}/>
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Creditos" component={Creditos} />
        <Drawer.Screen name="Configurações" component={Config}/>
      </Drawer.Navigator>
  );
}