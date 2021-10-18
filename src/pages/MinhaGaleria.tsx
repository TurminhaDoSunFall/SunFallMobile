import React from "react";
import {
    Container,
    FormRow,
    Label,
    TextInput,
    TitleFoto,
} from "../styles/MinhaGaleria";
import { Image } from "react-native";
import { Foto , ButtonEditar } from "../components";
import { MinhaGaleriaTypes } from "../types/ScreenStack.types";

export default function MinhaGaleria({navigation}: MinhaGaleriaTypes) {
  function handleEditar(){
    navigation.navigate("Editar");
  }
  
  return (
    
    <Container>
      <TitleFoto>Minha Galeria</TitleFoto>

      <Image style={{top: -100}} source={require("../../assets/imagemdeexemplo.png")}/>
      <ButtonEditar onPress={handleEditar} />
      <FormRow>
        <Label>Título</Label>
        <TextInput placeholder=""></TextInput>
      </FormRow>

      

      <FormRow>
       <Label>Descrição</Label>
        <TextInput placeholder=""></TextInput>
     </FormRow>
    
    </Container>
  );
}
