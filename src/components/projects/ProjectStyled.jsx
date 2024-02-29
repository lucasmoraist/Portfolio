import styled from "styled-components";

const ProjectStyled = styled.div`

    @media screen and (min-width: 976px) {
        #card-grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
    }

    /* Tela para tablet */
    @media screen and (min-width: 768px) and (max-width: 975px){
        #card-grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            width: 700px;
        }
    }

    /* Tela para celular */
    @media screen and (max-width: 767px){
        #card-grid{
            display: flex;
            flex-direction: column;
        }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #title{
        background: var(--orange-gradient);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-family: var(--poppins);
        font-weight: 800;
        font-size: 35px;
        text-align: center;
        margin-bottom: 50px;
    }
`

export default ProjectStyled;