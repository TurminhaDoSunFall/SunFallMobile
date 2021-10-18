import React from "react";
import {
  Container,
  Header,
  TitleLogin,
  FormRow,
  Label,
  TextInput, 
} from "../styles/Login";
import { Button } from "../components";
import { Image } from "react-native";
import { LoginTypes } from "../types/ScreenStack.types";

export default function Login({navigation}: LoginTypes) {
  
  function handlePerfil() {
    navigation.navigate("Perfil");
  }

  return (
    <Container>
        <Header/>
        <TitleLogin>LOG-IN</TitleLogin>
        <FormRow>
          <Label>E-mail:</Label>
          <TextInput placeholder="pedroisishess@yahoo.br"></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha: </Label>
          <TextInput placeholder="descobriramasenha"></TextInput>
        </FormRow>
        <Button title="Entrar" onPress={handlePerfil} />
        <Image style={{top: -50, width: 150, height: 150}} source={require("../../assets/logo.png")}/>
    </Container>
  );
}
