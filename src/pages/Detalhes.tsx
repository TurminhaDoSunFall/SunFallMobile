import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonEscolha, Header} from "../components";
import { DetalhesTypes } from "../types/ScreenStack.types";
import { Foto , Container, FormRow, Label } from "../styles/Detalhes";


export default function Detalhes({navigation}: DetalhesTypes) {
    function handleGaveta() {
      navigation.navigate("Gaveta");
    }
    return (
      <Container>
        <Header image={require("../../assets/logo.png")}/>
        <Foto image={require("../../assets/por_sol.jpg")}/>
        <FormRow>
          <Label>sLOREM IMPSUM</Label>
        </FormRow>
      </Container>
    )
};