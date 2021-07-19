import React from "react";
import { Central } from "../styles/credito";
import {Tituloroxo , Menu, Fundoama, Textog} from "../styles/reutilizar";

export default function Creditos(){
    return (
        <Fundoama>
            <Menu />
            <Tituloroxo></Tituloroxo>
            <Tituloroxo>
                <Central></Central>
            </Tituloroxo>
        </Fundoama>
    )
}