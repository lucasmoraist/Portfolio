import styled from "styled-components";

const NavStyled = styled.div`
    
    /* Tela para pc */
    @media screen and (min-width: 976px) {
        ul{
            gap: 60px;
        }
    }

    /* Tela para tablet */
    @media screen and (min-width: 768px) and (max-width: 975px){
        ul{
            gap: 60px;
        }
    }

    /* Tela para celular */
    @media screen and (max-width: 767px){
        box-sizing: border-box;
        margin-bottom: 150px;

        nav{
            display: flex;
            padding: 10px;
            height: 3em;
        }

        ul{
            flex-direction: column;
            gap: 10px;
            margin-top: 50px;

            
        }

        .burguer-menu {
            height: 100%;
            width: 4em;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 5px;
            cursor: pointer;
        }

        .burguer-bar {
            width: 2em;
            height: 6px;
            background-color: #fff;
            border-radius: 0.5em;
        }

        .menu {
            width: 150px;
            height: 200px;
            background-color: rgba(42, 42, 42, 0.4);
            position: absolute;
            top: 0;
            z-index: -1;
        }

        /* ------------- sliding menu ------------------ */
        .hidden {
            display: none;
        }
        
        .visible {
            display: inherit;
        }
        
        /* ----- animations--------- */
        /* clicked */
        .burguer-bar.clicked:nth-child(1){
            transform: rotate(45deg) translate(.6em, .5em);
            transition: ease-out .5s;
        }
        
        .burguer-bar.clicked:nth-child(2){
            transform: scale(0);
            transition: ease-out .5s;
        }
        
        .burguer-bar.clicked:nth-child(3){
            transform: rotate(135deg) translate(-.5em, .4em);
            transition: ease-out .5s;
        }
        
        /* unclicked */
        .burguer-bar.unclicked {
            transform: rotate(0) translate(0);
            transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
        }
    }

    background-color: var(--card-color);

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25px 0;
    }

    a {
        font-weight: 400;
        text-decoration: none;
        color: var(--primary-color);
        font-family: var(--jakarta);
    }
    
`

export default NavStyled;