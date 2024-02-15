import React from "react";
import NavStyled from "./NavStyled";

const Nav = () => {
    return <NavStyled>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </NavStyled>
}

export default Nav;