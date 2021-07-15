import { Button } from 'react-native';
import styled from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Fundo amarelo
export const Fundoama = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color:  #FEDF50;
`
//Fundo roxo 
export const Fundoro = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #80002B;
`
// Fundo laranja
export const Fundola = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FF7F27;
`

//config para Texto geral 
export const Textog = styled.View`
    font-family: 'Courier New';
    color: black;
    font-weight: normal;
`

//config pra Texto especial amarelo
export const Textoe = styled.View`
    font-family: 'Courier New';
    color: #FEDF50;
    font-weight: 3px;
`

//titulo amarelo
export const Tituloama = styled.View`
    font-family: chango;
    font-size: 24px;
    color: #FEDF50;
`
//titulo roxo
export const Tituloroxo = styled.View`
    font-family: chango;
    font-size: 24px;
    color: #80002B;
`
//botão amarelo usa pra tudo
export const Botao = styled.TouchableOpacity`
    background-color: #FF7F27;
    border-radius: 30px;
    height: 30px;
`

//menuzin no topo
export const Menu = styled.View`
    height: 95px;
    background-color: #80002B;
`

//Fundo pra fudo roxo puro
export const Fundogaveta = styled.View`
    background-color: #80002B;
`   