import React from "react";
import { Image } from "react-native";
import { HeaderProps } from "../../interfaces/Header.interface";
import { HeaderStyle, HeaderImage1 } from "./styles";

export default function Header({ image }: HeaderProps) {
  return (
    <HeaderStyle>
      <HeaderImage1>
        <Image source={require("../../assets/logo.png")}/>
      </HeaderImage1>
    </HeaderStyle>
  );
}
