import styled from "styled-components";

const CardStyled = styled.div`

    @media screen and (min-width: 976px) {
        .card{
            width: 390px;
            height: 301px;
        }    
        .card-back p{
            width: 339px;
        }  
        #button{
            margin: 90px 0 0 20px;
        }
    }

    /* Tela para tablet */
    @media screen and (min-width: 768px) and (max-width: 975px){
        .card{
            width: 320px;
            gap: 10px;
        }

        .card-back{
            height: 270px
        }

        .card-front{
            height: 260px;
        }

        #img-projeto{
            width: 320px;
        }

        .card-back p{
            width: 220px;
            height: 180px;
        }

        #button{
            margin: 10px 0 0 50px;
        }
    
    }

    /* Tela para celular */
    @media screen and (max-width: 767px){
        .card{
            width: 280px;
            gap: 20px;
        }

        .card-back{
            height: 300px;
        }

        .card-front{
            height: 260px;
        }

        #img-projeto{
            width: 280px;
        }

        .card-back p{
            width: 220px;
            height: 180px;
        }

        #button{
            margin: 10px 0 0 30px;
        }
    
    }

    
    justify-content: center;
    margin-bottom: 80px;
    .card{
        border-radius: 18px;
        background-color: var(--card-color);
        display: flex;
        flex-direction: column;
        
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
    }
`

export default CardStyled;