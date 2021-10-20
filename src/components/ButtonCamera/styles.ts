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
  margin-top: 50px;
  font-size: 15px;
  right: -235px;
  color: black;
  border-radius: 15px;
  font-weight: 200;
  margin-bottom: 80px;
  top: -18%;
  width: 60px;
  height: 35px;
  margin-right: 250px;
  

  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text`
  color: black;
  text-align: center;
  padding: 5px;
  font-size: 18px;
`