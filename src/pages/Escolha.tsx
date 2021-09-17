import React from "react";
import { Image } from "react-native";
import { Container } from "../styles/Escolha";
import { ButtonEscolha, Header} from "../components";
import { LoginTypes } from "../types/ScreenStack.types";

export default function Escolha({navigation}: LoginTypes) {

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
