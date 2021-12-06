import React from 'react';
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Creditos , Feedback, Perfil , Galeria, MinhaGaleria, CadastroFoto, Config, Camera, Detalhes, Editar} from '../pages';
import colors from '../styles/Colors';




const Drawer = createDrawerNavigator();

export default function Gaveta() {
  return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: '#80002B'},
          headerTintColor: '#FF7F27',
          drawerStyle: {
            backgroundColor: '#80002B',
          },
          drawerInactiveTintColor: '#FF7F27', 
          drawerActiveTintColor: '#29000E',
        }}
        >
        <Drawer.Screen name="Perfil" component={Perfil} options={{drawerLabel: "PERFIL"}} />
        <Drawer.Screen name="Minha Galeria" component={MinhaGaleria} options={{drawerLabel: "MINHA GALERIA"}} />
        <Drawer.Screen name="Cadastrar foto" component={CadastroFoto} options={{drawerLabel: "CADASTRAR FOTO"}}/>
        <Drawer.Screen name="Camera" component={Camera} options={{drawerLabel: "CÂMERA"}}/>
        <Drawer.Screen name="Galeria" component={Galeria} options={{drawerLabel: "GALERIA"}}/>
        <Drawer.Screen name="Detalhes" component={Detalhes} options={{drawerLabel: "DETALHES"}}/>
        <Drawer.Screen name="Editar" component={Editar} options={{drawerLabel: "EDITAR"}}/>
        <Drawer.Screen name="Feedback" component={Feedback} options={{drawerLabel: "FEEDBACK"}} />
        <Drawer.Screen name="Creditos" component={Creditos} options={{drawerLabel: "CRÉDITOS"}} />
        <Drawer.Screen name="Configurações" component={Config} options={{drawerLabel: "CONFIGURAÇÕES"}}/>
      </Drawer.Navigator>
  );
}

