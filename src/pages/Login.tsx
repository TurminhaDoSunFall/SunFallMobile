import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  Menu,
  TitleLogin,
  FormRow,
  Label,
  TextInput,
  Rodape 
} from "../styles/Login";
import { Button } from "../components";

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
        <Menu></Menu>
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
        <Rodape></Rodape>
    </Container>
  );
}
