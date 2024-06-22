import React, { useState } from "react";
import CardStyled from "./CardStyled";
import viewIcon from '../../assets/View Icon.svg'
import ReactCardFlip from "react-card-flip";


function Card({ projeto }) {

    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return <CardStyled>
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="card card-front" onClick={flipCard}>
                <img src={projeto.img} alt="Imagem do projeto" className="img-projeto" />

                <div className="know-more">
                    <div>
                        <p>CLICK HERE TO KNOW MORE</p>
                        <h2>{projeto.nome}</h2>
                    </div>

                    <div>
                        <img src={viewIcon} alt="Icone de seta para cima" />
                    </div>
                </div>
            </div>

            <div className="card card-back" onClick={flipCard}>
                <div className="description-wrapper">
                    <p>
                        {projeto.descricao}
                    </p>
                </div>

                <div className="btn">
                    <a href={projeto.link} target="_blank" rel="noreferrer">REPO GIT</a>
                </div>
            </div>
        </ReactCardFlip>
    </CardStyled>
}


export default Card