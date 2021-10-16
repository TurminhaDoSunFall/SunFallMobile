import React from "react";
import { Container, TitleFoto, FormRow, Label, TextInput} from "../styles/CadastroFoto";
import { Button, Header, ButtonCamera} from "../components"
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
        <ButtonGaveta title="Gaveta" onPress={handleGaveta} />
        <TitleFoto>Cadastrar Foto</TitleFoto>
        <FormRow>
          <Label>Título</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <ButtonCamera title="Tirar Foto" onPress={handleCamera} />
        <FormRow>
          <Label>Descrição</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha: </Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <Button title="Submit" onPress={handleMinhaGaleria} />
      </Container>
  );
}
