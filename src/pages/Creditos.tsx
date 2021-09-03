import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Menu, FormRow, Label, TitleCreditos } from "../styles/Creditos";
import { Fundoama } from "../styles/reutilizar";
import { Header , Rodape } from "../components";

export default function Creditos() {
  const navigation = useNavigation();
  function App() {
    navigation.navigate("App");
  }
  return (
    <Container>
      <Header/>
      <Fundoama>
        <Menu/>
        <TitleCreditos>CRÉDITOS</TitleCreditos>
        <FormRow>
          <Label>ISIS S. P. JOÃO MARCOS S. H. PEDRO LUIS C. B. _________________ CEFET-MG 2021 AGRADECIMENTOS LAZIN O SOL NOSSAS MÃES E OS PAIS TAMBÉM (PRA NÃO TER CIÚME)</Label>
        </FormRow>
      </Fundoama>
    </Container>
  );
}