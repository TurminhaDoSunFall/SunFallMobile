import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Header} from "../components";
import { CFCTypes } from "../types/ScreenStack.types";

export default function Creditos({navigation}: CFCTypes) {
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
    return (
      <Header/>
    );
  }