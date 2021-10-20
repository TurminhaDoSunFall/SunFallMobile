import styled from "styled-components/native"
import colors from "../styles/Colors"


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.roxoescuro};
  align-items: center;
  justify-content: center;
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 1px;
  text-align: center;
`

export const Label = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: 12px;
  color: ${colors.amarelo};
  padding: 5px;
  border-radius: 30px;
  width: 500px;
  height: 35px;
  text-align: center;
  top: -20%;
`