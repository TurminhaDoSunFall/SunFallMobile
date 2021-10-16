import React from "react";
import {
  Container,
  Menu,
  FormRow,
  Label,
  TitlePerfil,
  TextShow,
} from "../styles/Perfil";
import { Button } from "../components";
import { PerfilTypes } from "../types/ScreenStack.types";

export default function Perfil({navigation}: PerfilTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  return (
    <Container>
      <Button title="Gaveta" onPress={handleGaveta} />
      <Menu/>
        <TitlePerfil>PERFIL</TitlePerfil>
        <FormRow>
          <Label>Nome:</Label>
          <TextShow>Ricardo Almeida</TextShow>
        </FormRow>
        <FormRow>
          <Label>E-mail:</Label>
          <TextShow>Ricardo_Almeida578@gmail.com</TextShow>
        </FormRow>
        <FormRow>
          <Label>Nº de uplaods</Label>
          <TextShow>4732</TextShow>
        </FormRow>
        <FormRow>
          <Label>Localização</Label>
          <TextShow>Panamá</TextShow>
        </FormRow>
    </Container>
  );
}