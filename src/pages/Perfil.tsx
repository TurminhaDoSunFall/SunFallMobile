import React from "react";
import {
  Container,
  FormRow,
  Label,
  TitlePerfil,
  TextShow,
} from "../styles/Perfil";
import { Image } from "react-native";
import { Header , ButtonGaveta} from "../components";
import { PerfilTypes } from "../types/ScreenStack.types";

export default function Perfil({navigation}: PerfilTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  return (
    <Container>
      <Header/>
      <ButtonGaveta title="Gaveta" onPress={handleGaveta} />
        <TitlePerfil>PERFIL</TitlePerfil>
        <FormRow>
          <Label>Nome:</Label>
          <TextShow>  Ricardo Almeida</TextShow>
        </FormRow>
        <FormRow>
          <Label>E-mail:</Label>
          <TextShow>  Ricardo_Almeida578@gmail.com</TextShow>
        </FormRow>
        <FormRow>
          <Label>Uploads: </Label>
          <TextShow>  4732</TextShow>
        </FormRow>
        <FormRow>
          <Label>Localização: </Label>
          <TextShow>  Panamá</TextShow>
        </FormRow>
        <Image style={{top: -300, width: 150, height: 150}} source={require("../../assets/logo.png")}/>
    </Container>
  );
}
