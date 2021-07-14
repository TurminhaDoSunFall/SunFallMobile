import React from "react";
import { Central } from "../styles/credito";
import { Fundolarama, Tituloroxo , Menu} from "../styles/reutilizar";

export default function creditos(){
    return (
        <Fundolarama>
            <Menu></Menu>
            <Tituloroxo>Créditos</Tituloroxo>
            <Tituloroxo>
                <Central>ISIS S. P.
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
                    </Central>
            </Tituloroxo>
        </Fundolarama>
    )
}