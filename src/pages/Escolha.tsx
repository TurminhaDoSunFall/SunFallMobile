import React from "react";
//import { useNavigation } from "@react-navigation/core";
import { Container } from "../styles/Escolha";
import { ButtonEscolha, Header} from "../components";
import { LoginTypes } from "../types/ScreenStack.types";

export default function Login({navigation}: LoginTypes) {

  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  return (
    <Container>
      <Header Image source={require("../../assets/logo.png")}/>
      <ButtonEscolha title="LOG-IN" onPress={handleLogin} />
      <ButtonEscolha title="CADASTRE-SE" onPress={handleCadastrar} />
    </Container>
  );
}
