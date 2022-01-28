import { createGlobalStyle } from 'styled-components'
import px2vw from "../styles/utils/px2vw";

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: ${px2vw(20)};

    @media (min-width: 768px){
      font-size: ${px2vw(14)};
    }

    @media (min-width: 1024px){
      font-size: ${px2vw(12)}
    }
  }

  html {
    background: #333;
    // overflow-y: hidden;
  }
  a {
    text-decoration: none;
  }

`;