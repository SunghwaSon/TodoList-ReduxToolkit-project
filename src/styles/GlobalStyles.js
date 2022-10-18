import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      padding: 0px;
      margin: 0px;
      text-decoration: none;
      outline: none;
      font-family: "Noto Sans KR", sans-serif;
  }

  body {
    overflow: hidden;
  }

  /* html {
    font-size: 10px;
  } */

`;

export default GlobalStyles;
