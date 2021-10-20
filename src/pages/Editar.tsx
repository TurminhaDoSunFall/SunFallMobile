import React from "react";
import { Image } from "react-native";
import { Container, TitleFoto, FormRow, Label, TextInput } from "../styles/Editar";
import { Button } from "../components"
import { EditarTypes } from "../types/ScreenStack.types";

export default function Editar({navigation}: EditarTypes) {
      function handleMinhaGaleria() {
        navigation.navigate("MinhaGaleria");
      }
      return (
        <Container>
          <TitleFoto>Editar Foto</TitleFoto>
          <FormRow>
            <Label>Título: </Label>
             <TextInput placeholder=""></TextInput>
          </FormRow>
          <FormRow>
            <Label>Descrição: </Label>
            <TextInput placeholder=""></TextInput>
          </FormRow>
          <Image style={{top: -100}} source={require("../../assets/imagemdeexemplo.png")}/>
          <Button title="Salvar" onPress={handleMinhaGaleria}/>
        </Container>
    );
  }
