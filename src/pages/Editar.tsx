import React from "react";
import {Container, Header, TitleFoto, FormRow, Label, TextInput, Image} from "../styles/Editar";
import {Button} from "../components"
import { EditareCadastroFotoTypes } from "../types/ScreenStack.types";

export default function Editar({navigation}: EditareCadastroFotoTypes) {
    
  function handleGaveta() {
        navigation.navigate("Gaveta");
      }
    
      function handleMinhaGaleria() {
        navigation.navigate("MinhaGaleria");
      }
      return (
        <Container>
          <Header/>
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
