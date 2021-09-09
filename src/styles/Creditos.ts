import styled from 'styled-components/native'
import colors from "../styles/Colors"

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.amarelo};
  align-items: center;
  justify-content: center;
`

export const TitleCreditos = styled.Text`
  font-size: 18px;
  color: black;
  padding: 5px;
  border-radius: 30px;
  font-weight: 200;
  text-align: center;
  width: 80px;
  height: 35px;
  margin-bottom: 200px;
  top: 4%;
  font-family: "Chango_400Regular";
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 1px;
  text-align: center;
`

export const Label = styled.Text`
  font-family: "Chango_400Regular";
  font-size: 18px;
  color: roxoescuro;
  padding: 5px;
  border-radius: 30px;
  width: 80px;
  height: 35px;
  text-align: center;
  top: -35%;
`