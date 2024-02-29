import styled from "styled-components";

const ExperienceStyled = styled.div`

@media screen and (min-width: 976px) {
    #experience-content{
        width: 810px;
    }
    #cabecalho-experience{
        align-items: center;
    }
}

/* Tela para tablet */
@media screen and (min-width: 768px) and (max-width: 975px){
    #experience-content{
        width: 670px;
    }

    #cabecalho-experience{
        align-items: center;
    }
}

/* Tela para celular */
@media screen and (max-width: 767px){

    #experience-content{
        width: 300px;
    }

    #cabecalho-experience{
        flex-direction: column;
        gap: 10px;
    }
}


display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 100px;

#experience-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}

#cabecalho-experience{
    display: flex;
    justify-content: space-between;
}

#cabecalho-experience div{
    display: flex;
    align-items: center;
    gap: 10px;
}

h2{
    text-align: center;
    font-weight: bold;
    font-size: 35px;
    font-family: var(--poppins);
    background: var(--blue-gradient);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

h3{
    font-family: var(--poppins);
    font-size: 21.74px;
    font-weight: bold;
    color: var(--primary-color);
}

p{
    font-family: var(--poppins);
    font-size: 14.49px;
    color: var(--secondary-text);
    text-align: justify;
}

`

export default ExperienceStyled;