import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 936px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  padding: 120px 124px 0;

  h3 {
    font-size: 48px;
    color: var(--black);
  }
`;

export const Form = styled.form`
  max-width: 433px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 47px;

  h1 {
    font-size: 30px;
    color: var(--gray-500);
    font-weight: 400;
    opacity: 1;
  }

  label {
    width: 100%;
    text-align: left;
    justify-content: left;
    margin-top: 50px;
    margin-bottom: 4px;
    color: var(--gray-500);

    & + label {
      margin-top: 18px;
    }

    p {
      color: red;
      margin-top: 18px;
    }
  }

  > a {
    margin-top: 18px;
    text-decoration: none;
    color: var(--gray-500);
    text-align: right;
    width: 100%;
  }

  > p {
    width: 80%;
    text-align: center;
    margin-top: 40px;
    position: relative;

    &:before {
      content: "";
      border-bottom: 0.5px solid var(--gray-500);
      position: absolute;
      width: 50%;
      top: 50%;
      left: -18px;
      opacity: 1;
    }

    &:after {
      content: "";
      border-bottom: 0.5px solid var(--gray-500);
      width: 50%;
      position: absolute;
      top: 50%;
      right: -18px;
      opacity: 1;
    }
  }

  @media (max-width: 1180px) {
    padding: 0 12px;
  }
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  span {
    font-weight: 900;
  }

  a {
    color: var(--blue);
  }

  @media (max-width: 500px) {
    margin-bottom: 8px;
  }
`;

export const Info = styled.div`
  margin-top: 40px;
  text-align: center;

  div {
    span {
      font-weight: 900;
    }

    a {
      color: var(--blue);
    }
  }
`;