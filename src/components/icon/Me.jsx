import React from "react";
import iconMe from '../../assets/lucas-icon.png'
import BackgroundIcon from "./MeStyled";

const Me = () => {
    return <BackgroundIcon>
        <div>
            <img src={iconMe} alt="Meu rosto em forma de Memoji" width={"136px"} height={"185px"}/>
        </div>
    </BackgroundIcon>
}

export default Me;