import React from "react";
import { Header, Foto } from "../components";
import { FormRow, Title, Label, Container } from "../styles/Galeria";
import { GaleriaTypes } from "../types/ScreenStack.types";
import { FlatList, View } from "react-native";
import data from "../services/data";
import { DetalhesProps } from "../interfaces/Detalhes.interface";


export default function Galeria({navigation}: GaleriaTypes) {
      function handleDetalhes(item:DetalhesProps) {
        navigation.navigate("Detalhes", {...item});
      }
    
    return (
      <>
      <Header />
      <Container>
        <Title>GALERIA</Title>
        <FlatList data={data} keyExtractor={(item)=>String(item.id)} renderItem={({item})=>(
          <View key={item.id}>
            <Foto image={item.foto} onPress={()=>handleDetalhes(item)}/>
            <FormRow><Label>{item.titulo}</Label></FormRow>
            <FormRow><Label>{item.descricao}</Label></FormRow>
            <FormRow><Label>{item.nome_user}</Label></FormRow>
            <FormRow></FormRow>
          </View>
        )} />
      </Container>
      </>
    );
} 

