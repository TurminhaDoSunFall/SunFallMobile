import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  Menu,
  Rodape,
  FormRow,
  Label,
  TextInput,
  TitleCadastrar,
} from "../styles/Cadastrar";
import { Button } from "../components";
import { BotaoReportarProblema } from "../styles/Feedback";

export default function Feedback() {
  const navigation = useNavigation();
  function handleHome() {
    navigation.navigate("HomeStack");
  }
  return (
    <Container>
      <Menu></Menu>
        <TitleCadastrar>Reporte um erro que você encontrou utilizando o site SunFall:</TitleCadastrar>
        <FormRow>
          <Label>Erro:</Label>
          <TextInput placeholder="Qual é o erro em questão? "></TextInput>
        </FormRow>
        <FormRow>
          <Label>Descrição do Erro</Label>
          <BotaoReportarProblema placeholder="Descreva o erro que você encontrou, relatando cada detalhe e(opcional) possíveis soluções para o devido problema."></BotaoReportarProblema>
        </FormRow>
        <Button title="Submit" onPress={handleHome} />
      <Rodape></Rodape>
    </Container>
  );
}