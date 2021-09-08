import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, FormRow, Label, TextInput} from "../styles/CadastroFoto";
import {Button} from "../components"
import { EditareCadastroFotoTypes } from "../types/ScreenStack.types";

//tem que ter um handle em Minha Galeria para aqui dar certo, igual o que está abaixo, chamando CadastroFoto
export default function CadastroFoto({navigation}: EditareCadastroFotoTypes) {
  function handleMinhaGaleria(){
    navigation.navigate("MinhaGaleria");
  }
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
    return (
      <Container>
        <TitleFoto>Cadastrar Foto</TitleFoto>

        //titulo da foto
        <FormRow>
          <Label>Título</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>

        //insercao da foto 

        //Descricao da foto
        <FormRow>
          <Label>Descrição</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>

         //localização sim/não 
        
        //senha para confirmar 
        <FormRow>
          <Label>Senha: </Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        
        //Botton submit que leva até a MinhaGaleria
        <Button title="Submit" onPress={handleMinhaGaleria} />
        </Container>
  );
}