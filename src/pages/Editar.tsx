import React from "react";
//import { useNavigation } from "@react-navigation/core";
import {Container, Menu, TitleFoto, FormRow, Label, TextInput, Image} from "../styles/Editar";
import {Button} from "../components"
import { MinhaGaleriaTypes } from "../types/ScreenStack.types";


//tem que ter um handle em Minha Galeria para aqui dar certo, igual o que está abaixo, chamando CadastroFoto
export default function Creditos({navigation}: MinhaGaleriaTypes) {
    function handleGaveta() {
        navigation.navigate("Gaveta");
      }
    
      function handleMinhaGaleria() {
        navigation.navigate("MinhaGaleria");
      }
      return (
        <Container>
          <Menu></Menu>
          <TitleFoto>Editar Foto</TitleFoto>
  
          //titulo da foto
          <FormRow>
            <Label>Título</Label>
            <TextInput placeholder=""></TextInput>
          </FormRow>
  
          //Arquivo da foto que veio de Minha Galeria
          <Image source={require("../../assets/imagemdeexemplo.png")}/>
  
          //Descricao da foto
          <FormRow>
            <Label>Descrição</Label>
            <TextInput placeholder=""></TextInput>
          </FormRow>
          
          //Botton salvar que leva até a MinhaGaleria
          <Button title="Salvar" onPress={handleMinhaGaleria} />
        </Container>
    );
  }
