import React from "react";
import { Image } from "react-native";
import { FotoProps } from "../../interfaces/Foto.interface";
import { FotoStyle, FotoImage } from "./styles";

export default function Foto({image, onPress}: FotoProps) {
  return (
    <FotoStyle onPress={onPress}>
      <FotoImage source={image}/>
    </FotoStyle>
  );
}
