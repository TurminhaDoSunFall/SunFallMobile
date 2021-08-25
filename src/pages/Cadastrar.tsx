import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, FormRow, Label, TextInput, TitleCadastrar } from "../styles/Cadastrar";
import { Button, Header } from "../components";
import LoginRoute from "../routes/login.route";
import Footer from "../components/Footer";


export default function Cadastrar() {
  const navigation = useNavigation();
  function Login() {
    navigation.navigate("Login");
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
        <Button title="Submit" onPress={Login} />
      <Footer />
    </Container>
  );
}
