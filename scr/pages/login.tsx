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

export default function Login() {
  const navigation = useNavigation();
  function handleHome() {
    navigation.navigate("HomeStack");
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
        <Button title="Submit" onPress={handleHome} />
        <Rodape></Rodape>
    </Container>
  );
}