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
      <Header/> 
        <TitleCreditos>CRÉDITOS</TitleCreditos>
        <FormRow><Label>ISIS S. P.</Label></FormRow>
        <FormRow><Label> JOÃO MARCOS S. H</Label></FormRow>
        <FormRow><Label>PEDRO LUIS C. B.</Label></FormRow>
        <FormRow><Label>_________________</Label></FormRow>
        <FormRow><Label>CEFET-MG</Label></FormRow>
        <FormRow><Label>2021</Label></FormRow>
        <FormRow><Label>AGRADECIMENTOS</Label></FormRow>
        <FormRow><Label>LAZIN</Label></FormRow>
        <FormRow><Label>O SOL</Label></FormRow>
        <FormRow><Label>NOSSAS MÃES</Label></FormRow>
        <FormRow><Label>E OS PAIS TAMBÉM (PRA NÃO TER CIÚME)</Label></FormRow>
    </Container>
  );
}