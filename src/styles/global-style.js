import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Global Constants
const TOP_NAVBAR_HEIGTH = "5rem";
const BOTTOM_NAVBAR_HEIGTH = "5rem";
const BOTTOM_SHEET_HEIGHT = window.innerHeight;

export const GlobalStyle = createGlobalStyle`
    ${reset}

      /* Global Styles */
  :root {
    --top-navbar-height: ${TOP_NAVBAR_HEIGTH};
    --btm-navbar-height: ${BOTTOM_NAVBAR_HEIGTH};
    --btm-sheet-height: ${BOTTOM_SHEET_HEIGHT};
    /* 프로젝트 색상 */
    --primary-color: rgba(22, 49, 114, 1);
    --secondary-color: rgba(30, 86, 160, 1);
    --tertiary-color: rgba(214, 228, 240, 1);
    --main-bg-color: rgba(246, 246, 246, 1);
    
  }

  * {
    box-sizing: border-box;
  }
  
  
  body {
    color: #111111;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    font-family: "IBM Plex Sans KR", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
