import styled from 'styled-components'

export const Background = styled.div`
  padding: 0;
  position: absolute;
  background-color: #333;
  width: 100%;
  height: 100vh;

`;

export const Container = styled.div`
@media only screen and (max-width: 1280px){
  padding: 0;
  position: absolute;
  width: 35%;
  height: 50vh;
  background-color: #fff;
  top: 30%;
  left: 32.5%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px #111;
}
  padding: 0;
  position: absolute;
  width: 35%;
  height: 50vh;
  background-color: #fff;
  top: 30%;
  left: 32.5%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px #111;
`;

export const Form = styled.form`
  
`;

export const Div = styled.div`

`;

export const Input = styled.input`
  position: absolute;
  padding: 10px;
  height: 60px;
  width: 450px;
  border: solid 1px #009add;
  border-radius: 5px;
  background: none;
  outline: none;
  transition: 0.4s ease-out;
  &:focus{
      box-shadow: 0px 0px 8px #4484c4;
  }
  
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  position: absolute;
`;

export const Button = styled.button`
  position: absolute;
  height: 50px;
  width: 150px;
  top: 83%;
  left: 37%;
  border: none;
  border-radius: 5px;
  background-color: yellowgreen;
  cursor: pointer;
`;