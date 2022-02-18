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

  input[type="date"]::-webkit-datetime-edit, input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-clear-button {
    color: #fff;
    position: relative;
    padding: 1px;
    left: 1px;
  }
  
  input[type="date"]::-webkit-datetime-edit-year-field{
    position: absolute !important;
    border-left:1px solid #8c8c8c;
    padding: 1px;
    color:#000;
    left: 45px;
  }
  
  input[type="date"]::-webkit-datetime-edit-month-field{
    position: absolute !important;
    border-left:1px solid #8c8c8c;
    padding: 1px;
    color:#000;
    left: 25px;
  }      
  
  input[type="date"]::-webkit-datetime-edit-day-field{
    position: absolute !important;
    color:#000;
    padding: 1px;
    left: 5px;        
  }

`;