import styled, { css } from 'styled-components/native'
import { ButtonStyleProps } from "../../interfaces/ButtonStyle.interface"

const sizeVariations = {
  default: css`
  `,
  define: css`
    width: 120px;
  `
}

export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  margin-top: 10px;
  font-size: 18px;
  right: -235px;
  color: black;
  font-weight: 200;
  margin-bottom: 80px;
  width: 250px;
  height: 35px;
  margin-right: 450px;
  align-self: center;

  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  font-family: "Chango_400Regular";
  color: black;
  text-align: center;
  padding: 5px;
  font-size: 18px;
`