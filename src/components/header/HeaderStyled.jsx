import styled from "styled-components";

const HeaderStyled = styled.div`

    h1{
        font-size: 55px;
        color: #fff;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    span{
        background: radial-gradient(circle at 30% 60%, #FF6060, #8000FF);
        -webkit-text-fill-color: transparent;
        background-clip: text;

    }

    button{
        color: #fff;
        background-color: #161513;
        border: solid 2px #fff;
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