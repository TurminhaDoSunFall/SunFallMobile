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
  font-size: 15px;
  right: -235px;
  color: black;
  border-radius: 15px;
  font-weight: 200;
  top: -20%;
  width: 100px;
  height: 35px;
  margin-right: 250px;
  align-self: center;

  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  color: black;
  text-align: center;
  padding: 5px;
  font-size: 15px;
`