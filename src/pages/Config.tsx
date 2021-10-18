import React from "react";
import { Header , ButtonConfig , ButtonGaveta } from "../components";

import {
  Container,
  FormRow,
  TitleCadastrar,
} from "../styles/Cadastrar";
import { CFCTypes } from "../types/ScreenStack.types";

export default function Config({navigation}: CFCTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  function handleConfig() {
    navigation.navigate("Gaveta");
  }
    return (
      <Container> 
        <Header/>
        <FormRow>
          <TitleCadastrar>Som:</TitleCadastrar>
          <TitleCadastrar>ViverFeliz:</TitleCadastrar>
          <ButtonConfig title="Delete Account" onPress={handleConfig} />
          <ButtonConfig title="Log Out" onPress={handleConfig} />
        </FormRow>
      
    </Container>


    );
  }
