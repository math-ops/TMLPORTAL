import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background: #333;
    overflow-y: hidden;
  }
  a {
    text-decoration: none;
  }

`;