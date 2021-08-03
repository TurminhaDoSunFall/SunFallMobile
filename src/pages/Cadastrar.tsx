import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  Menu,
  Rodape,
  FormRow,
  Label,
  TextInput,
  TitleCadastrar,
} from "../styles/Cadastrar";
import { Button } from "../components";

export default function Cadastrar() {
  const navigation = useNavigation();
  function handleHome() {
    navigation.navigate("HomeStack");
  }
  return (
    <Container>
      <Menu></Menu>
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
        <Button title="Submit" onPress={handleHome} />
      <Rodape></Rodape>
    </Container>
  );
}
