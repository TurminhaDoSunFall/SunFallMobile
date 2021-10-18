import React from "react";
import { Image } from "react-native";
import { Container, FormRow, Label, TextInput, TitleCadastrar } from "../styles/Cadastrar";
import { Button, Header } from "../components";
import { CadastrarTypes } from "../types/ScreenStack.types";


export default function Cadastrar({navigation}: CadastrarTypes) {
  function handleLogin(){
    navigation.navigate("Login");
  }
  return (
    <Container>
      <Header/>
        <TitleCadastrar>SIGN-UP</TitleCadastrar>
        <FormRow>
          <Label>Nome:</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <FormRow>
          <Label>E-mail:</Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha: </Label>
          <TextInput placeholder=""></TextInput>
        </FormRow>
        <Button title="Cadastrar" onPress={handleLogin} />
        <Image style={{top: -50, width: 150, height: 150}} source={require("../../assets/logo.png")}/>
    </Container>
  );
}
