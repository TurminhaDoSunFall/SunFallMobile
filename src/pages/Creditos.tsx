import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, FormRow, Label, TitleCreditos } from "../styles/Creditos";
import { Header } from "../components";
import { CFCTypes } from "../types/ScreenStack.types";

export default function Creditos({navigation}: CFCTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  return (
    <Container>
      <Header image={require("../../assets/logo.png")}/> 
        <TitleCreditos>CRÉDITOS</TitleCreditos>
        <FormRow>
          <Label>ISIS S. P.</Label>
          <Label> JOÃO MARCOS S. H</Label>
          <Label>PEDRO LUIS C. B.</Label>
          <Label>_________________</Label>
          <Label>CEFET-MG</Label>
          <Label>2021</Label>
          <Label>AGRADECIMENTOS</Label>
          <Label>LAZIN</Label>
          <Label>O SOL</Label>
          <Label>NOSSAS MÃES</Label>
          <Label>E OS PAIS TAMBÉM (PRA NÃO TER CIÚME)</Label>
        </FormRow>
    </Container>
  );
}