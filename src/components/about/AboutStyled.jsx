import styled from "styled-components";

const AboutStyled = styled.div`

    @media screen and (min-width: 976px) {
        p{
            width: 670px;
        }
        
        #languages{
            gap: 70px;
        }
    }

    /* Tela para tablet */
    @media screen and (min-width: 768px) and (max-width: 975px){
        p{
            width: 670px;
        }
        
        #languages{
            gap: 50px;
        }
    }

    /* Tela para celular */
    @media screen and (max-width: 767px){
        
        justify-content: center;
        p{
            width: 300px;
        }
        
        #languages{
            gap: 20px;
        }
    }

    
    display: flex;
    align-items: center;
    flex-direction: column;
        

    p{
        font-family: var(--poppins);
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
        margin: 50px 0;
    }
`

export default AboutStyled;