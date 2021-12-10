import Routes from "./src/routes";
import React from "react";
import {useFonts, Nunito_400Regular} from "@expo-google-fonts/nunito";
import {Chango_400Regular} from "@expo-google-fonts/chango";
import { AuthProvider } from "./src/hook/auth";
import { Loading } from "./src/components";

export default function App() {
  let[ fontsLoaded ]=useFonts({Nunito_400Regular, Chango_400Regular});
  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

