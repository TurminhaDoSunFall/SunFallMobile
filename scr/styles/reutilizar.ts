import { Button } from 'react-native';
import styled from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Fundo amarelo em cima roxo em baixo
export const Fundoamaro = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #FEDF50 0%, #FF7F27 48.02%, #80002B 100%), #FF7F27;
`
//Fundo roxo em cima e amarelo em baixo
export const Fundoroxama = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #80002B 0%, #FF7F27 48.02%, #FEDF50 100%), #FFFFFF;
`
// Fundo laranja em cima e amarelo em baixo
export const Fundolarama = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #FF7F27 0%, #FEDF50 69.37%);
`

//config para Texto geral 
export const Textog = styled.View`
    font-family: nunito;
    color: black;
    font-weight: 3px;
`

//config pra Texto especial amarelo
export const Textoe = styled.View`
    font-family: nunito;
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
    background-color: #FF7F27;
`

//Fundo pra gavetinha
export const Fundogaveta = styled.View`
    background-color: #80002B;
`   