import React, { useState } from "react";
import NavStyled from "./NavStyled";

const Nav = () => {

    const [burguerClass, setBurguerClass] = useState('burguer-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [isVisible, setIsVisible] = useState(false);

    const updateMenu = () => {
        if (!isVisible) {
            setBurguerClass('burguer-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurguerClass('burguer-bar unclicked')
            setMenuClass('menu hidden')
        }

        setIsVisible(!isVisible)
    }

    return <NavStyled style={{ width: '100%' }}>
        <nav>
            <div className="burguer-menu" onClick={updateMenu}>
                <div className={burguerClass} ></div>
                <div className={burguerClass} ></div>
                <div className={burguerClass} ></div>
            </div>
        </nav>

        <div className={menuClass}>
            <ul >
                <li><a href="#home">Home</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

    </NavStyled>
}

export default Nav;