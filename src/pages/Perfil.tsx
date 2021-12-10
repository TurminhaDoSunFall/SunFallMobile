import React, { useEffect, useState } from "react";
import {
  Container,
  FormRow,
  Label,
  TitlePerfil,
  TextShow,
} from "../styles/Perfil";
import { Image , Alert } from "react-native";
import {
  PerfilProps,
  IPerfil,
  IInterfacePerfil,
} from "../interfaces/Perfil.interface";
import apiPerfil from "../services/data/Perfil";
import { Header , ButtonGaveta , Loading } from "../components";
import { useAuth } from "../hook/auth";
import { PerfilTypes } from "../types/ScreenStack.types";
import { AxiosError } from "axios";

export default function Perfil({navigation}: PerfilTypes) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IInterfacePerfil[]>()

  function handlePerfil(item: PerfilProps) {
    navigation.navigate("Perfil", { ...item });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiPerfil.index();
        setData(response.data.data);
      } catch (error) {
        const err = error as AxiosError;
        const data = err.response?.data as IPerfil;
        let message = "";
        if (data.data) {
          for (const [key, value] of Object.entries(data.data)) {
            message = `${message} ${value}`;
          }
        }
        Alert.alert(`${data.message} ${message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  
  function handleGaveta() {
    navigation.navigate("Gaveta");
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header/>
          <ButtonGaveta title="Gaveta" onPress={handleGaveta} />
            <TitlePerfil>PERFIL</TitlePerfil>
            <FormRow>
              <Label>Nome:</Label>
              <TextShow > {user?.name} </TextShow>
            </FormRow>
            <FormRow>
              <Label>E-mail:</Label>
              <TextShow > {user?.email} </TextShow>
            </FormRow>
            <FormRow>
              <Label>Uploads: </Label>
              <TextShow> {user?.uploads} </TextShow>
            </FormRow>
            <Image style={{top: -300, width: 150, height: 150}} source={require("../../assets/logo.png")}/>
        </Container>
       )
      }
    </>
  );
}
