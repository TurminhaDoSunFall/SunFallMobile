import styled from "styled-components/native"
import colors from "../styles/Colors"

export const Foto = styled.Image `
    height: auto;
    width: fit-content;
`

export const Container = styled.View`
  flex: 1;
  background-color: roxoescuro;
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
  color: yellow;
  padding: 5px;
  border-radius: 30px;
  width: 80px;
  height: 35px;
  text-align: center;
  top: -35%;
`