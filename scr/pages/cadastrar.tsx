import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  FormRow,
  Label,
  TextInput,
  TitleLogin,
  Form,
} from "../styles/Login";
import { Button } from "../components";
import { Menu , Fundola} from "../styles/reutilizar";

export default function Login() {
  const navigation = useNavigation();
  function handleHome() {
    navigation.navigate("HomeStack");
  }
  return (
    <Container>

      <Form>
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
      </Form>
    </Container>
  );
}