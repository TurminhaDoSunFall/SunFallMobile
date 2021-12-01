import styled from 'styled-components/native'
import colors from "../styles/Colors"

export const Title = styled.Text`
  font-size: 24px;
  font-family: Chango_400Regular;
  color: ${colors.roxo} ;
  font-weight: 500;
  margin-bottom: 100px;
  text-align: center;
  top: 8%;
`

export const Foto = styled.Image `
    height: auto;
    width: auto;
`

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.amarelo};
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
  color: ${colors.roxo};
  padding: 5px;
  border-radius: 30px;
  width: 400px;
  height: 35px;
  text-align: center;
  top: -23%;
  margin
`