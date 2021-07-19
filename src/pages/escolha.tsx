import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container } from "../styles/Escolha";
import { ButtonEscolha, Header} from "../components";

export default function Escolha() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  return (
    <Container>
        <Header image={require("../../assets/logo 4.png")}/> 
        <ButtonEscolha title="LOG-IN" onPress={handleLogin} />
        <ButtonEscolha title="CADASTRE-SE" onPress={handleCadastrar} />
    </Container>
  );
}