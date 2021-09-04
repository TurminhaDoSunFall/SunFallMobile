import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonEscolha, Header} from "../components";

export default function CadastroFoto() {
    const navigation = useNavigation();
    function Login() {
      navigation.navigate("Gaveta");
    }
    return (
      <Header/>
    );
  }