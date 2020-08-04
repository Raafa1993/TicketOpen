import { createGlobalStyle } from 'styled-components';

import ondas from '../assets/ondas.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;

  }

  body {
    background: #2B2E34;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  #root {
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
  }
`;
