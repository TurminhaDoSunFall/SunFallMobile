import React from 'react';
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Creditos , Escolha, Feedback, Perfil , Galeria, MinhaGaleria, CadastroFoto, Config, Camera} from '../pages';
import colors from '../styles/Colors';




const Drawer = createDrawerNavigator();

export default function Gaveta() {
  return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: '#FF7F27'},
          headerTintColor: '#FF7F27',
          drawerStyle: {
            backgroundColor: '#80002B',
          },
          drawerInactiveTintColor: '#80002B', 
          drawerActiveTintColor: '#29000E',
        }}
        >
        <Drawer.Screen name="Escolha" component={Escolha} options={{drawerLabel: "ESCOLHA"}}/>
        <Drawer.Screen name="Perfil" component={Perfil} options={{drawerLabel: "PERFIL"}} />
        <Drawer.Screen name="Galeria" component={Galeria} options={{drawerLabel: "GALERIA"}}/>
        <Drawer.Screen name="Minha Galeria" component={MinhaGaleria} options={{drawerLabel: "MINHA GALERIA"}} />
        <Drawer.Screen name="Cadastrar foto" component={CadastroFoto} options={{drawerLabel: "CADASTRAR FOTO"}}/>
        <Drawer.Screen name="Feedback" component={Feedback} options={{drawerLabel: "FEEDBACK"}} />
        <Drawer.Screen name="Creditos" component={Creditos} options={{drawerLabel: "CRÉDITOS"}} />
        <Drawer.Screen name="Configurações" component={Config} options={{drawerLabel: "CONFIGURAÇÕES"}}/>
        <Drawer.Screen name="Camera" component={Camera} options={{drawerLabel: "CÂMERA"}}/>
      </Drawer.Navigator>
  );
}