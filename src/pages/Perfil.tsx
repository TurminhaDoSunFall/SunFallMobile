import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  Menu,
  Rodape,
  FormRow,
  Label,
  TitlePerfil,
  TextShow,
} from "../styles/Perfil";
import { Button } from "../components";
import { PerfilTypes } from "../types/ScreenStack.types";
import { LoginTypes } from "../types/ScreenStack.types";

export default function Perfil({navigation}: PerfilTypes) {
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  return (
    <Container>
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
      <Rodape/>
    </Container>
  );
}