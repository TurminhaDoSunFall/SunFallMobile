import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ButtonEscolha, Header} from "../components";

export default function Cadastrar() {
    const navigation = useNavigation();
    function Login() {
      navigation.navigate("GaleriaRoute");
    }
    return (
      <Header/>
    );
} 
