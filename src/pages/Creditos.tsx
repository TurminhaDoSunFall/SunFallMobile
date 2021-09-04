import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Menu, FormRow, Label, TitleCreditos } from "../styles/Creditos";
import { Fundoama } from "../styles/reutilizar";
import { Header , Rodape } from "../components";
import { CFCTypes } from "../types/ScreenStack.types";

export default function Creditos({navigation}: CFCTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
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