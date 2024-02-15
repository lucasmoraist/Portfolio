import styled from "styled-components";

const ProjectStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #card-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

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