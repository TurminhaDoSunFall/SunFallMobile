import React from "react";
//import { useNavigation } from "@react-navigation/core";
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
        <Button title="Submit" onPress={handleLogin} />
    </Container>
  );
}
