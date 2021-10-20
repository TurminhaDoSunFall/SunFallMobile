import React from "react";
import { Container, TitleFoto, FormRow, Label, TextInput} from "../styles/CadastroFoto";
import { Header, ButtonCamera , ButtonCadastrarFoto } from "../components"
import { CadastroFotoTypes } from "../types/ScreenStack.types";

export default function CadastroFoto({navigation}: CadastroFotoTypes) {
  
  function handleMinhaGaleria() {
    navigation.navigate("MinhaGaleria");
  }

  function handleCamera() {
    navigation.navigate("Camera");
  }


    return (
      <Container>
        <Header/>
        <TitleFoto>Cadastrar Foto</TitleFoto>
        <ButtonCamera title="📷" onPress={handleCamera} />
        <FormRow>
          <Label>Título</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <FormRow>
          <Label>Descrição</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha: </Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <ButtonCadastrarFoto title="Cadastrar" onPress={handleMinhaGaleria} />
      </Container>
  );
}
