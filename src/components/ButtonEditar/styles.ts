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
  background-color: #FEDF50;
  font-size: 18px;
  right: -235px;
  color: black;
  border-radius: 10px;
  font-weight: 200;
  top: -10%;
  width: 35px;
  height: 35px;
  margin-right: 470px;
  align-self: center;

  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  color: black;
  text-align: center;
  padding: 5px;
  font-size: 18px;
`