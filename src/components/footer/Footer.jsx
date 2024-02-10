import React from "react";
import FooterStyled from "./FooterStyled";

const Footer = () => {
    return <FooterStyled>
        <div id="content">
            <h2>Contact</h2>

            <div id="contatos">
                <div id="email">
                    <i class="fa fa-envelope email"></i>
                    <a href="mailto:luksmnt1101@gmail.com">luksmnt1101@gmail.com</a>
                </div>

                <div id="redes">
                    <a href="https://www.instagram.com/lucax.mn/" className="iconRedes" target="_blank">
                        <i class="fa fa-instagram rede"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/lucas-morais-152672219/" className="iconRedes" target="_blank">
                        <i class="fa fa-linkedin-square rede"></i>
                    </a>

                    <a href="https://github.com/lucasmoraist" className="iconRedes" target="_blank">
                        <i class="fa fa-github rede"></i>
                    </a>
                </div>
            </div>
        </div>
    </FooterStyled>
}

export default Footer;