import styled from 'styled-components/native'
import colors from "../styles/Colors"

export const BotaoReportarProblema = styled.TextInput`
  font-size: 15px;
  color: black;
  padding: 5px;
  background-color: #FEDF50;
  border-radius: 30px;
  width: 250px;
  height: 150px;
  top: -50%;
`

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.laranja};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Chango_400Regular";
  color: black;
  padding: 5px;
  background-color: ${colors.amarelo};
  border-radius: 30px;
  font-weight: 200;
  text-align: center;
  width: 160px;
  height: 35px;
  margin-bottom: 200px;
  top: 20%;
`

export const TitleCadastrar = styled.Text`
  font-size: 15px;
  color: black;
  padding: 5px;
  background-color: ${colors.amarelo};
  border-radius: 30px;
  font-weight: 200;
  text-align: center;
  width: 300px;
  height: 50px;
  margin-bottom: 200px;
  top: -5%;
`

export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 1px;
`

export const Label = styled.Text`
  font-size: 15px;
  color: black;
  padding: 5px;
  background-color: ${colors.amarelo};
  border-radius: 30px;
  width: 90px;
  height: 35px;
  text-align: center;
  top: -50%;
`

export const TextInput = styled.TextInput`
  font-size: 15px;
  color: black;
  padding: 5px;
  background-color: ${colors.amarelo};
  border-radius: 30px;
  width: 250px;
  height: 35px;
  top: -50%;
`