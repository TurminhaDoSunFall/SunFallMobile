import styled from 'styled-components/native'
import colors from "../styles/Colors"

export const Container = styled.View`
  flex: 1;
  background-color: amarelo;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 24px;
  color: preto;
  font-weight: 500;
  margin-bottom: 100px;
  text-align: center;
`

export const TitleCadastrar = styled.Text`
  font-size: 18px;
  color: black;
  padding: 5px;
  background-color: amarelo;
  border-radius: 30px;
  font-weight: 200;
  text-align: center;
  width: 80px;
  height: 35px;
  margin-bottom: 200px;
  top: 4%;
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 1px;
`

export const Label = styled.Text`
  font-size: 18px;
  color: black;
  padding: 5px;
  background-color: amarelo;
  border-radius: 30px;
  width: 80px;
  height: 35px;
  text-align: center;
  top: -35%;
`

export const TextInput = styled.TextInput`
  font-size: 18px;
  color: black;
  padding: 5px;
  background-color: amarelo;
  border-radius: 30px;
  width: 250px;
  height: 35px;
  top: -35%;
`