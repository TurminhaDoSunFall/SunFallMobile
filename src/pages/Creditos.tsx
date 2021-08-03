import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  Menu,
  FormRow,
  Label,
  TitleCreditos,
} from "../styles/Creditos";

export default function Creditos() {
  const navigation = useNavigation();
  function handleHome() {
    navigation.navigate("Perfil");
  }
  return (
    <Container>
      <Menu/>
        <TitleCreditos>CRÉDITOS</TitleCreditos>
        <FormRow>
          <Label>ISIS S. P. JOÃO MARCOS S. H. PEDRO LUIS C. B. _________________ CEFET-MG 2021 AGRADECIMENTOS LAZIN O SOL NOSSAS MÃES E OS PAIS TAMBÉM (PRA NÃO TER CIÚME)</Label>
        </FormRow>
    </Container>
  );
}