import React from "react";
import { Menu , Textog , Tituloroxo, Botao, Fundola} from "../styles/reutilizar";

export default function Perfil(){
    return(
        <Fundola>
            <Menu />
            <Tituloroxo>PERFIL</Tituloroxo>
            <Textog>
                <label>Nome:</label><Botao><p>Ricardo Almeida</p></Botao><br/>
                <label>Email:</label><Botao><p>Ricardo_Almeida@gmail.com</p></Botao><br/>
                <label>Nº de uploads:</label><Botao><p>42069</p></Botao><br/>
                <label>Localização</label><Botao><p>Maracanã</p></Botao><br/>
            </Textog>
        </Fundola>
    )
}