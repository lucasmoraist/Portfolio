import React, { useState } from "react";
import CardStyled from "./CardStyled";
import codechella from '../../assets/codechella.svg';
import grafico from '../../assets/grafico.svg';
import certificate from '../../assets/certificate.svg';
import security from '../../assets/security.svg';
import viewIcon from '../../assets/View Icon.svg'
import ReactCardFlip from "react-card-flip";
import Projetos from "../../mocks/Projetos";


function Card({projeto}) {

    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return <CardStyled>
        
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="card" onClick={flipCard}>
                <img src={Projetos.img} />

                <div id="know-more">
                    <div>
                        <p>CLICK HERE TO KNOW MORE</p>
                        <h2>{Projetos.nome}</h2>
                    </div>

                    <div>
                        <img src={viewIcon} />
                    </div>
                </div>
            </div>

            <div className="card card-back" onClick={flipCard}>
                <div>
                    <p>
                        {Projetos.descricao}
                    </p>
                </div>

                <div id="button">
                    <a href={Projetos.link}>REPO GIT</a>
                </div>
            </div>
        </ReactCardFlip>
        
    </CardStyled>
}

export default Card;