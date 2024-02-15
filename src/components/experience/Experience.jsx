import React from "react";
import ExperienceStyled from "./ExperienceStyled";
import Experiencias from '../../mocks/Experiencias'
import sobei from '../../assets/SOBEI.png'

const Experience = () => {

    const lista = [Experiencias.cargo, Experiencias.periodo,Experiencias.descricao]

    return <ExperienceStyled id="experience">
        <div id="experience-content">
            <h2>Experience</h2>
            <div id="cabecalho-experience">
                <div id="cargo">
                    <img src={sobei} alt="Logo da empresa onde eu trabalhei" />
                    <h3>{lista[0]}</h3>
                </div>

                <div>
                    <p>{lista[1]}</p>
                </div>
            </div>

            <p>{lista[2]}</p>
        </div>
    </ExperienceStyled>
}

export default Experience;