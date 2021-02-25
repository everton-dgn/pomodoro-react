import { createGlobalStyle } from 'styled-components'
import { s } from 'theme'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    -webkit-font-smoothing: antialiased !important;
    list-style: none !important;
  }

  html {
    font-size: 62.5%;
  }
  
  body,
  html,
  #root {
    background-color: ${s.light200};
    color: ${s.dark500};
  }

  body, #root, input, select, textarea, button {
    font: 400 1.6rem 'Poppins', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 0.7rem !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${s.blue300};
    border-radius: 20rem;
  }

  :root {
    scrollbar-color: ${s.blue300} ${s.light100} !important;
    scrollbar-width: 0.7rem !important;
  }
`
