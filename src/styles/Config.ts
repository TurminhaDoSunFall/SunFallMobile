import styled from 'styled-components/native'
import colors from "../styles/Colors"

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.laranja};
  align-items: center;
  justify-content: center;
`


export const TitleConfig = styled.Text`
  font-size: 18px;
  color: black;
  padding: 5px;
  font-weight: 200;
  text-align: center;
  width: 100px;
  height: 35px;
  margin-bottom: 200px;
  top: 40%;
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 6px;
  margin-bottom: 1px;
`

export const Label = styled.Text`
  font-size: 18px;
  color: black;
  padding: 5px;
  width: 100px;
  height: 35px;
  text-align: center;

`

export const TextInput = styled.TextInput`
  font-size: 18px;
  color: black;
  padding: 5px;
  width: 300px;
  height: 35px;
  top: -35%;
`