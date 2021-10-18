import styled from 'styled-components/native'
import colors from "../styles/Colors"

export const Container = styled.View`
  flex: 1;
  background-color: #FF7F27;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: "Chango_400Regular";
  color: black;
  font-weight: 500;
  margin-bottom: 100px;
  text-align: center;
`

export const TitleFoto = styled.Text`
  font-size: 18px;
  font-family: "Chango_400Regular";
  color: black;
  padding: 5px;
  background-color: #FEDF50;
  border-radius: 30px;
  font-weight: 200;
  text-align: center;
  width: 250px;
  height: 35px;
  margin-bottom: 200px;
  top: -15%;
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 1px;
`

export const Label = styled.Text`
  font-size: 15px;
  font-family: "Nunito_400Regular";
  color: black;
  padding: 5px;
  background-color: #FEDF50;
  border-radius: 30px;
  width: 90px;
  height: 35px;
  text-align: center;
  top: -95%;
`

export const TextInput = styled.TextInput`
  font-size: 15px;
  font-family: "Nunito_400Regular";
  color: black;
  padding: 5px;
  background-color: #FEDF50;
  border-radius: 30px;
  width: 250px;
  height: 35px;
  top: -95%;
`
