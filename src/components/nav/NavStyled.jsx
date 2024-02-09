import styled from "styled-components";

const NavStyled = styled.div`
    background-color: var(--card-color);
    
    ul{
        display: flex;
        list-style: none;
        gap: 60px;
        align-items: center;
        justify-content: center;
        padding: 25px 0;
    }

    a{
        text-decoration: none;
        color: var(--primary-color);
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
`

export default NavStyled;