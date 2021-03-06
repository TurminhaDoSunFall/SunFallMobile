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
import { ButtonFeedback } from "../components";
import { FeedbackTypes } from "../types/ScreenStack.types";

export default function Feedback({navigation}: FeedbackTypes) {
  
  function handleFeedback() {
    navigation.navigate("Feedback");
  }

  return (
    <Container>
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
        <ButtonFeedback title="Enviar" onPress={handleFeedback} />
    </Container>
  );
}
