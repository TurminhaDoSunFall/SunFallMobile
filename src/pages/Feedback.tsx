import React from "react";
import {
  Container,
  Title,
  FormRow,
  Label,
  TextInput,
  TitleCadastrar,
  BotaoReportarProblema
} from "../styles/Feedback";
import { Button , ButtonGaveta } from "../components";
import { FeedbackTypes } from "../types/ScreenStack.types";

export default function Feedback({navigation}: FeedbackTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  function handleFeedback() {
    navigation.navigate("Feedback");
  }

  return (
    <Container>
      <ButtonGaveta title="Gaveta" onPress={handleGaveta} />
      <Title>FeedBack</Title>
        <TitleCadastrar>Reporte um erro que você encontrou utilizando o site SunFall:</TitleCadastrar>
        <FormRow>
          <Label>Erro:</Label>
          <TextInput placeholder=" Qual é o erro em questão? "></TextInput>
        </FormRow>
        <FormRow>
          <Label>Descrição: </Label>
          <BotaoReportarProblema placeholder=" Descreva o erro que você encontrou, relatando cada detalhe e(opcional) possíveis soluções para o devido problema."></BotaoReportarProblema>
        </FormRow>
        <Button title="Enviar" onPress={handleFeedback} />
    </Container>
  );
}
