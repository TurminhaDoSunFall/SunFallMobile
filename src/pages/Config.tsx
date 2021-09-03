import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonEscolha, Header} from "../components";

import { Header } from "../components";
import {
    Container,
    Menu,
    Rodape,
    FormRow,
    Label,
    TextInput,
    TitleCadastrar,
  } from "../styles/Cadastrar";

  import { Button } from "../components";

  export default function Feedback() {
    const navigation = useNavigation();
    function handleHome() {
      navigation.navigate("HomeStack");
    }
    return (
      <Container>
        <Header></Header>
            <Menu>Configurações:</Menu>
            <Label>Viver feliz:</Label>
            <Label>Som</Label>
            <Button title="Deletar Perfil" onPress={} />
            <Button title="Log Out" onPress={} />
        <Footer></Footer>
      </Container>
    );
  }
