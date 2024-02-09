import styled from "styled-components";

const HeaderStyled = styled.div`

    h1{
        font-size: 55px;
        color: var(--primary-color);
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    span{
        background: var(--primary-gradient);
        -webkit-text-fill-color: transparent;
        background-clip: text;

    }

    button{
        color: var(--primary-color);
        background-color: #161513;
        border: solid 2px var(--primary-color);
        border-radius: 50px;
        width: 140px;
        padding: 10px;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }

    #perfil{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        gap: 20px;
    }
`

export default HeaderStyled;