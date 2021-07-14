import React from "react";
import { Menu , Fundoroxama , Textog , Tituloama, Botao} from "../styles/reutilizar";

export default function Perfil(){
    return(
        <Fundoroxama>
            <Menu />
            <Tituloama>PERFIL</Tituloama>
            <Textog>
                <label>Nome:</label><Botao><p>Ricardo Almeida</p></Botao><br/>
                <label>Email:</label><Botao><p>Ricardo_Almeida@gmail.com</p></Botao><br/>
                <label>Nº de uploads:</label><Botao><p>42069</p></Botao><br/>
                <label>Localização</label><Botao><p>Maracanã</p></Botao><br/>
            </Textog>
        </Fundoroxama>
    )
}