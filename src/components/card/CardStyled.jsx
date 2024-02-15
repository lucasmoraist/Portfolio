import styled from "styled-components";

const CardStyled = styled.div`
    
    justify-content: center;
    margin-bottom: 80px;
    .card{
        width: 390px;
        height: 301px;
        border-radius: 18px;
        background-color: var(--card-color);
    }

    img {
        border-radius: 18px;
    }

    #know-more{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 25px;
    }

    #know-more div p{
        font-family: var(--poppins);
        font-weight: 300;
        font-size: 10px;
        color: var(--secondary-text);
    }

    #know-more div h2{
        font-family: var(--poppins);
        font-weight: bold;
        font-size: 19px;
        color: var(--primary-color);
    }

    .card-back div:first-child{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
    }

    .card-back p{
        width: 339px;
        text-align: justify;
        font-size: 14px;
        font-family: var(--poppins);
        font-weight: 600;
        color: var(--secondary-text);
    }

    a {
        text-decoration: none;
        font-size: 19px;
        font-family: var(--poppins);
        font-weight: 800;
        background: var(--orange-gradient);
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    #button{
        display: flex;
        width: 134px;
        height: 34px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
        margin: 90px 0 0 20px;
    }
`

export default CardStyled;