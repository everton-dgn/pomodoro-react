import { createGlobalStyle } from 'styled-components'
import { s } from 'theme'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Poppins', 'Arial', sans-serif !important;
    list-style: none !important;
  }

  body,
  html,
  #root {
    background-color: ${s.light200};
    font-size: 15px;
    color: ${s.dark500};
  }

  #root, input, select, textarea, button {
    font: 400 16px 'Poppins', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  a,
  a:active {
    color: #00f;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 7px !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${s.light300};
    border-radius: 20px;
  }

  :root {
    scrollbar-color: ${s.light300} ${s.light100} !important;
    scrollbar-width: 7px !important;
  }
`
