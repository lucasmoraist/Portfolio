import React from "react";
import AboutStyled from "./AboutStyled";

const About = () => {
    return <AboutStyled>

        <p>
            Me chamo de Lucas de Morais, sou Dev Full Stack! Apaixonado por programação desde os 18 anos, sou de São Paulo Capital,
            nascido em 2004. Sou Formado em Análise e Desenvolvimento de Software, na FIAP. Além da programação eu também adoro praticar
            esportes e com ele aprendi a trabalhar muito bem equipe e me esforçar para dar ótimos resultados individualmente.
            Nas horas vagas gosto de assistir animes, jogar jogos eletrônicos, ir a academia ou praticar algum esporte.
        </p>

        <div id="experience">
            <h2>EXPERIENCE WITH</h2>

            <div id="languages">
                <i className="devicon-java-plain"></i>
                <i className="devicon-spring-original"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-angular-plain"></i>
            </div>
        </div>

    </AboutStyled>
}

export default About;