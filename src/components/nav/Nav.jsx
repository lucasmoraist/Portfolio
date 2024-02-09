import React from "react";
import NavStyled from "./NavStyled";

const Nav = () => {
    return <NavStyled>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </NavStyled>
}

export default Nav;