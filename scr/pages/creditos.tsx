import React from "react";
import { Central } from "../styles/credito";
import {Tituloroxo , Menu, Fundoama} from "../styles/reutilizar";

export default function Creditos(){
    return (
        <Fundoama>
            <Menu />
            <Tituloroxo>Créditos</Tituloroxo>
            <Tituloroxo>
                <Central>
                    <text>ISIS S. P.
                        JOÃO MARCOS S. H.
                        PEDRO LUIS C. B. 
                        _________________
                        CEFET-MG
                        2021

                        AGRADECIMENTOS
                        LAZIN
                        O SOL
                        NOSSAS MÃES
                        E OS PAIS TAMBÉM
                        (PRA NÃO TER CIÚME)
                        </text>
                    </Central>
            </Tituloroxo>
        </Fundoama>
    )
}