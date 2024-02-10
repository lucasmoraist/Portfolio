import styled from "styled-components";

const AboutStyled = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
        

    p{
        font-family: var(--poppins);
        width: 670px;
        font-size: 18;
        color: var(--secondary-text);
        text-align: justify;
    }

    i {
        font-size: 42px;
        background: linear-gradient(#FDFDFD, rgba(255,255,255,0.18));
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    #experience{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
    }

    #experience h2 {
        color: var(--secondary-text);
        font-family: var(--poppins);
        font-size: 20px;
        font-weight: 600;
    }

    #languages{
        display: flex;
        gap: 70px;
        margin: 50px 0;
    }
`

export default AboutStyled;