import React from "react";
import HeaderStyled from "./HeaderStyled";
import Nav from "../nav/Nav";
import Me from "../icon/Me";

const Header = () => {

    const download = async () => {
        const get = await fetch("https://portfolio-web-lucas.s3.amazonaws.com/Curr%C3%ADculo.pdf")
            .then(response => response.blob())
            .then(blob => {
                
                var downloadUrl = URL.createObjectURL(blob);
                var ancora = document.createElement("a");

                ancora.href=downloadUrl;
                ancora.download='Currículo.pdf';
                
                document.body.appendChild(ancora);
                ancora.click();

                document.body.removeChild(ancora);
                URL.revokeObjectURL(downloadUrl)
            })
        return get;
    }

    return <HeaderStyled>
        {/* Barra de navegação */}
        <Nav />

        <div id="perfil">
            {/* Memoji do meu rosto */}
            <Me />

            <h1>Software <span>Developer</span></h1>
            <div>
                <button onClick={download}>Download CV</button>
            </div>
        </div>
    </HeaderStyled>
}

export default Header;