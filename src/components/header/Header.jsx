import React from "react";
import HeaderStyled from "./HeaderStyled";
import Nav from "../nav/Nav";
import Me from "../icon/Me";

const Header = () => {
    return <HeaderStyled>
        {/* Barra de navegação */}
        <Nav />

        <div id="perfil">
            {/* Memoji do meu rosto */}
            <Me />

            <h1>Software <span>Developer</span></h1>
            <div>
                <button>Download CV</button>
            </div>
        </div>
    </HeaderStyled>
}

export default Header;