import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  TitleLogin,
  FormRow,
  Label,
  TextInput, 
} from "../styles/Login";
import { Alert } from "react-native";
import { useAuth } from "../hook/auth";
import { IAuthenticate, IUser } from "../interfaces/User.interface";
import { Button , ButtonText , Loading } from "../components";
import { Image } from "react-native";
import { LoginTypes } from "../types/ScreenStack.types";

export default function Login({navigation}: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);

  function handlePerfil() {
    navigation.navigate("Perfil");
  }
  
  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }
  
  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
        setIsLoading(false);
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
            <Header/>
            <TitleLogin>LOG-IN</TitleLogin>
            <FormRow>
              <Label>E-mail:</Label>
              <TextInput 
                placeholder="e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(i) => handleChange({ email: i })}
              ></TextInput>
            </FormRow>
            <FormRow>
              <Label>Senha: </Label>
              <TextInput    
                placeholder="senha"
                secureTextEntry={true}
                onChangeText={(i) => handleChange({ password: i })}
              ></TextInput>
            </FormRow>
            <Button title="Entrar" onPress={handleSignIn} />
            <ButtonText title="Cadastre-se" onPress={handlePerfil} />
            <Image style={{top: -50, width: 150, height: 150}} source={require("../../assets/logo.png")}/>
        </Container>
      )}
    </>
  );
}
