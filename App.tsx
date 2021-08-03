import Routes from "./src/routes";
import React from "react";
import {useFonts, Nunito_400Regular} from "@expo-google-fonts/nunito";
import {Chango_400Regular} from "@expo-google-fonts/chango";
import {Text} from "react-native";

export default function App() {
  let[ fontsLoaded ]=useFonts({Nunito_400Regular, Chango_400Regular});
  if (!fontsLoaded){
    return <Text>Carregando~</Text>;
  } else {
    return <Routes />;
  }
}
