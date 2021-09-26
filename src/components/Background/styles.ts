import styled from "styled-components";

export const Container = styled.section`
  background: var(--blue);

  .carousel {
    margin: 60px auto;
    max-width: 705px;
    height: 800px;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      padding: 0 16px;

      img {
        width: 100%;
      }

      h1 {
        margin-top: 30px;
        font-size: 38px;
        font-weight: 400;
        color: var(--white);
        opacity: 1;
      }

      p {
        margin-top: 20px;
        text-align: center;
        color: var(--white);
        font-size: 25px;
      }
    }

    @media (max-width: 490px) {
      div {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
`;
