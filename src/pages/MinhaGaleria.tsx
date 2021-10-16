import React from "react";
import {
    Container,
    FormRow,
    Label,
    TextInput,
    TitleFoto,
} from "../styles/Editar";
import { Image } from "react-native";
import { Button , Header , ButtonGaveta } from "../components";
import { MinhaGaleriaTypes } from "../types/ScreenStack.types";

export default function MinhaGaleria({navigation}: MinhaGaleriaTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  function handleEditar(){
    navigation.navigate("Editar");
  }
  return (
    
    <Container>
      <Header/>
      <ButtonGaveta title="Gaveta" onPress={handleGaveta} />
      <TitleFoto>Minha Galeria</TitleFoto>

      <Image source={require("../../assets/imagemdeexemplo.png")}/>

      <FormRow>
        <Label>Título</Label>
        <TextInput placeholder=""></TextInput>
      </FormRow>

      <Button onPress={handleEditar} />

      <FormRow>
       <Label>Descrição</Label>
        <TextInput placeholder=""></TextInput>
     </FormRow>
    
    </Container>
  );
}
