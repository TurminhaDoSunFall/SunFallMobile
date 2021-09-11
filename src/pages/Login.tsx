import React from "react";
//import { useNavigation } from "@react-navigation/core";
import {
  Container,
  Header,
  TitleLogin,
  FormRow,
  Label,
  TextInput, 
} from "../styles/Login";
import { Button } from "../components";
import { LoginTypes } from "../types/ScreenStack.types";

export default function Login({navigation}: LoginTypes) {
  
  function handlePerfil() {
    navigation.navigate("Perfil");
  }

  function handleEscolha() {
    navigation.navigate("Escolha");
  }

  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  return (
    <Container>
        <Header/>
        <TitleLogin>LOG-IN</TitleLogin>
        <FormRow>
          <Label>E-mail:</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha: </Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <Button title="Submit" onPress={handlePerfil} />
    </Container>
  );
}
