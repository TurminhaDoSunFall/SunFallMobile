import styled from 'styled-components/native'
import colors from "../styles/Colors"

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.amarelo};
  align-items: center;
  justify-content: center;
`

export const TitleCreditos = styled.Text`
  font-size: 14px;
  color: black;
  padding: 5px;
  border-radius: 30px;
  font-weight: 200;
  text-align: center;
  width: 300px;
  height: 35px;
  margin-bottom: 160px;
  top: 4%;
  font-family: "Chango_400Regular";
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-bottom: 1px;
  text-align: center;
`

export const Label = styled.Text`
  font-family: "Chango_400Regular";
  font-size: 10px;
  color: ${colors.roxoescuro};
  padding: 5px;
  border-radius: 30px;
  width: 300px;
  height: 35px;
  text-align: center;
  top: -55%;
`