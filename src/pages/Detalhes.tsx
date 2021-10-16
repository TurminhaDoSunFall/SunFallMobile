import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonEscolha, Header, Foto , ButtonGaveta } from "../components";
import { DetalhesTypes } from "../types/ScreenStack.types";
import { Container, FormRow, Label } from "../styles/Detalhes";
import { DetalhesProps } from "../interfaces/Detalhes.interface";


export default function Detalhes({navigation}: DetalhesTypes) {
    const { titulo, foto, descricao, nome_user } = route.params as DetalhesProps;
    function handleGaveta() {
      navigation.navigate("Gaveta");
    }
    function handleGaleria() {
      navigation.navigate("Galeria")
    }
    return (
      <Container>
        <Header/>
        <ButtonGaveta title="Gaveta" onPress={handleGaveta} />
        <Foto image={require("../../assets/por_sol.jpg")}/>
        <FormRow>
          <Label>sLOREM IMPSUM</Label>
        </FormRow>
      </Container>
    )
};
