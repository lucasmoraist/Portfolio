import styled from "styled-components";

const HeaderStyled = styled.div`

    h1{
        font-size: 55px;
        color: var(--primary-color);
        font-weight: bold;
        font-family: var(--poppins);
    }

    span{
        background: var(--primary-gradient);
        -webkit-text-fill-color: transparent;
        background-clip: text;

    }

    button{
        color: var(--primary-color);
        background-color: var(--background-color);
        border: solid 2px var(--primary-color);
        border-radius: 50px;
        width: 140px;
        padding: 10px;
        font-weight: 600;
        font-family: var(--poppins);
        cursor: pointer;
    }

    #perfil{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0 50px 0;
        gap: 20px;
    }
`

export default HeaderStyled;