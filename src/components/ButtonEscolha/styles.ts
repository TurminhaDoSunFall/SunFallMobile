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
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  color: black;
  border-radius: 10px;
  font-weight: 200;

  

  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  color: black;
  text-align: center;
  padding: 5px;
  font-size: 18px;
`