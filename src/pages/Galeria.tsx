import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonEscolha, Header} from "../components";
import { FormRow, Title, Foto, Label, Container  } from "../styles/Galeria";
import { GaleriaTypes } from "../types/ScreenStack.types";


export default function Editar({navigation}: GaleriaTypes) {
    function handleGaveta() {
        navigation.navigate("Gaveta");
      }
      function handleDetalhes() {
        navigation.navigate("Detalhes");
      }
    return (
      <>
      <Header image={require("../../assets/logo.png")}/>
      <Container>
        <Title>GALERIA</Title>
        <Foto image={require("../../assets/por_sol.jpg") /*onPress={Detalhes}*/}/>
        <FormRow><Label>LOREM IPSUM</Label></FormRow>
        <FormRow></FormRow>
        <Foto image={require("../../assets/por_sol.jpg")}/>
        <FormRow><Label>LOREM IPSUM</Label></FormRow>
        <FormRow></FormRow>
        <Foto image={require("../../assets/por_sol.jpg")}/>
        <FormRow><Label>LOREM IPSUM</Label></FormRow>
        <FormRow></FormRow>
        <Foto image={require("../../assets/por_sol.jpg")}/>
        <FormRow><Label>LOREM IPSUM</Label></FormRow>
        <FormRow></FormRow>4
      </Container>
      </>
    );
} 
