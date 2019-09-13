import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    min-height: ${window.innerHeight}px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
