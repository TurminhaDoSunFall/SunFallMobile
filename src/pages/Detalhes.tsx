import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonEscolha, Header, Foto} from "../components";
import { DetalhesTypes } from "../types/ScreenStack.types";
import { Container, FormRow, Label } from "../styles/Detalhes";


export default function Detalhes({navigation}: DetalhesTypes) {
    function handleGaveta() {
      navigation.navigate("Gaveta");
    }
    function handleGaleria() {
      navigation.navigate("Galeria")
    }
    return (
      <Container>
        <Header/>
        <Foto image={require("../../assets/por_sol.jpg")}/>
        <FormRow>
          <Label>sLOREM IMPSUM</Label>
        </FormRow>
      </Container>
    )
};