import React from "react";
import { Container, TitleFoto, FormRow, Label, TextInput} from "../styles/CadastroFoto";
import { Header, ButtonGaveta , ButtonCamera , ButtonCadastrarFoto } from "../components"
import { EditareCadastroFotoTypes } from "../types/ScreenStack.types";

export default function CadastroFoto({navigation}: EditareCadastroFotoTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
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
        <ButtonCamera title="Tirar Foto" onPress={handleCamera} />
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
