import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #ffffff;
    --gray-100: #00000029;
    --gray-500: #707070;
    --black: #000000;
    --blue: #a9c5ba;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--white);
    color: var(---gray-500);
  }

  body, input, button {
    font-family: 'Mulish', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;