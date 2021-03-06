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
  background-color: #80002B;
  margin-top: 275px;
  font-size: 18px;
  right: -235px;
  color: black;
  border-radius: 10px;
  font-weight: 200;
  margin-bottom: 80px;
  top: 5%;
  width: 90px;
  height: 35px;
  margin-right: 200px;
  

  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  color: black;
  text-align: center;
  padding: 5px;
  font-size: 18px;
`
