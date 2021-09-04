import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Menu, TitleFoto, FormRow, Label, TextInput, Rodape} from "../styles/CadastroFoto";
import {Button} from "../components"

//tem que ter um handle em Minha Galeria para aqui dar certo, igual o que está abaixo, chamando CadastroFoto
export default function CadastroFoto() {
  const navigation = useNavigation();
  function handleMinhaGaleria() {
    navigation.navigate("MinhaGaleria");
  }
    return (
      <Container>
        <Menu></Menu>
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
        <Rodape></Rodape>
        </Container>
  );
}