import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #FF7F27;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  background-color: #80002B;
  height: 85px;
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
  width: 200px;
  height: 35px;
  margin-bottom: 200px;
  top: 5%;
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 1px;
`

export const Label = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: 15px;
  color: black;
  padding: 5px;
  background-color: #FEDF50;
  border-radius: 30px;
  width: 85px;
  height: 35px;
  text-align: center;
  top: -15%;
`

export const TextInput = styled.TextInput`
  font-family: "Nunito_400Regular";
  font-size: 15px;
  color: black;
  padding: 5px;
  background-color: #FEDF50;
  border-radius: 30px;
  width: 300px;
  height: 35px;
  top: -15%;
`
