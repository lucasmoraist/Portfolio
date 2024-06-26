import styled from "styled-components";

export const DivEducation = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .education-container {
      justify-content: center;
      align-items: center;
    }
    .education-wrapper {
      width: 100%;
    }
  }


  .education-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 90px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  .education-wrapper {
    display: flex;
    margin: 0 20px;
    gap: 10px;
    align-items: center;
  }

  h2 {
    background: var(--orange-gradient);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: var(--poppins);
    font-weight: 800;
    font-size: 35px;
    text-align: center;
  }
  p {
    font-family: var(--poppins);
    font-size: 15px;
    color: var(--secondary-text);
  }
`;
