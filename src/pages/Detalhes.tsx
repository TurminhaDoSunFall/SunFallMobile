import React from "react";
import { Header, Foto , ButtonGaveta , Button } from "../components";
import { DetalhesTypes } from "../types/ScreenStack.types";
import { Container, FormRow, Label } from "../styles/Detalhes";
//import { DetalhesProps } from "../interfaces/Detalhes.interface";


export default function Detalhes({navigation}: DetalhesTypes) {
    //const { titulo, foto, descricao, nome_user } = route.params as DetalhesProps;
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
        <Button title="Voltar" onPress={handleGaleria} />
      </Container>
    )
};
