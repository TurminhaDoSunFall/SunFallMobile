import React from "react";
import {ButtonConfig} from "../components";

import {
  Container,
  FormRow,
  TitleConfig,
} from "../styles/Config";
import { CFCTypes } from "../types/ScreenStack.types";

export default function Config({navigation}: CFCTypes) {
  
  function handleEscolha() {
    navigation.navigate("Escolha");
  }
    return (
      <Container> 
        <FormRow>
          <TitleConfig>Som:</TitleConfig>
        </FormRow>
        <FormRow>
          <TitleConfig>ViverFeliz:</TitleConfig>
        </FormRow>
          <ButtonConfig title="Delete Account" onPress={handleEscolha} />
          <ButtonConfig title="Log Out" onPress={handleEscolha} />  
    </Container>


    );
  }