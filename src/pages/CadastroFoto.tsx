import React from "react";
import { Container, TitleFoto, FormRow, Label, TextInput} from "../styles/CadastroFoto";
import { Button, Header,} from "../components"
import { EditareCadastroFotoTypes } from "../types/ScreenStack.types";

export default function CadastroFoto({navigation}: EditareCadastroFotoTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  function handleMinhaGaleria() {
    navigation.navigate("MinhaGaleria");
  }
    return (
      <Container>
        <Header/>
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