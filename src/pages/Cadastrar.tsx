import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, FormRow, Label, TextInput, TitleCadastrar } from "../styles/Cadastrar";
import { Button, Header } from "../components";
import LoginRoute from "../routes/login.route";
import Footer from "../components/Footer";
import { CadastrarTypes } from "../types/ScreenStack.types";


export default function Creditos({navigation}: CadastrarTypes) {
  function handleEscolha() {
    navigation.navigate("Escolha");
  }
  function handleLogin(){
    navigation.navigate("Login");
  }
  function handleGaveta(){
    navigation.navigate("Gaveta");
  }
  return (
    <Container>
      <Header></Header>
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
      <Footer />
    </Container>
  );
}
