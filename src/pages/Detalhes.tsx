import React from "react";
import { Foto , Button } from "../components";
import { DetalhesTypes } from "../types/ScreenStack.types";
import { Container, FormRow, Label } from "../styles/Detalhes";
//import { DetalhesProps } from "../interfaces/Detalhes.interface";


export default function Detalhes({navigation}: DetalhesTypes) {
    //const { titulo, foto, descricao, nome_user } = route.params as DetalhesProps
    function handleGaleria() {
      navigation.navigate("Galeria")
    }
    return (
      <Container>
        <Foto image={require("../../assets/imagemdeexemplo.png")}/>
        <FormRow>
          <Label>Pôr do sol genérico</Label>
        </FormRow>
        <FormRow>
          <Label>Um bonito por do sol 2.0</Label>
        </FormRow>
        <FormRow>
          <Label>Joaoozinho1810</Label>
        </FormRow>
        <Button title="Voltar" onPress={handleGaleria} />
      </Container>
    )
};