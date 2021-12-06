import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { Image , Alert } from "react-native";
import { Container, FormRow, Label, TextInput, TitleCadastrar } from "../styles/Cadastrar";
import { Button, Header , Loading} from "../components";
import { CadastrarTypes } from "../types/ScreenStack.types";
import { useAuth } from "../hook/auth";
import { IRegister , IUser} from "../interfaces/User.interface";



export default function Cadastrar({navigation}: CadastrarTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }
  
  function handleLogin(){
    navigation.navigate("Login");
  }

  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
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
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header/>
            <TitleCadastrar>SIGN-UP</TitleCadastrar>
            <FormRow>
              <Label>Nome:</Label>
              <TextInput 
                placeholder="nome"
                onChangeText={(i) => handleChange({ name: i })}>
              </TextInput>
            </FormRow>
            <FormRow>
              <Label>E-mail:</Label>
              <TextInput 
                placeholder="e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(i) => handleChange({ email: i })}>
              </TextInput>
            </FormRow>
            <FormRow>
              <Label>Senha: </Label>
              <TextInput 
                placeholder="senha"
                secureTextEntry={true}
                onChangeText={(i) => handleChange({ password: i })}>
              </TextInput>
            </FormRow>
            <Button title="Cadastrar" onPress={handleRegister} />
            <Button title="TelaLogin" onPress={handleLogin} />
            <Image style={{top: -50, width: 150, height: 150}} source={require("../../assets/logo.png")}/>
        </Container>
      )}
    </>
  );
}
