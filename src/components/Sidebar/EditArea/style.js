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
  width: 45%;
  height: 60vh;
  background-color: #fff;
  top: 25%;
  left: 30%;
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

export const TableName = styled.h1`
  @media only screen and (max-width: 1280px) {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 40px;
    text-shadow: 0px 0px 1px #fff;
    top: -18%;
    left: 21%;
      color: #fff;
  }
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 45px;
  text-shadow: 0px 0px 1px #fff;
  top: -20%;
  left: 20%;
    color: #fff;
`;

export const Form = styled.form`
  
`;

export const Div = styled.div`

`;

export const Input = styled.input`
@media only screen and (max-width: 1280px){
  position: absolute;
  padding: 10px;
  height: 60px;
  width: 450px;
  background: none;
  border: 1px solid #009add;
  border-radius: 5px;
  outline: none;
  &:focus{
    box-shadow: 0px 0px 8px #4484c4;
}
}
  position: absolute;
  padding: 10px;
  height: 60px;
  width: 450px;
  background: none;
    border: 1px solid #009add;
    border-radius: 5px;
    outline: none;
    &:focus{
      box-shadow: 0px 0px 8px #4484c4;
  }
  
`;

export const Select = styled.select`
@media only screen and (max-width: 1280px){
  position: absolute;
  padding: 10px;
  height: 60px;
  width: 450px;
  background: none;
  border: 1px solid #009add;
  border-radius: 5px;
  outline: none;
  &:focus{
    box-shadow: 0px 0px 8px #4484c4;
}
}
  position: absolute;
  padding: 10px;
  height: 60px;
  width: 450px;
  background: none;
    border: 1px solid #009add;
    border-radius: 5px;
    outline: none;
    &:focus{
      box-shadow: 0px 0px 8px #4484c4;
  }
  `;

export const Label = styled.label`
@media only screen and (max-width: 1280px){
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  position: absolute;
  color: #000;
}
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  position: absolute;
  color: #000;
`;

export const Button = styled.button`
@media only screen and (max-width: 1280px){
  position: absolute;
  height: 50px;
  width: 150px;
  top: 83%;
  left: 57%;
  border: none;
  border-radius: 3px;
  background: #009add;
  box-shadow: 0 0 3px #333;
  cursor: pointer;
  color: #fff;
  &:hover{
    transition: 0.4s ease-out;
    background: #006add;
    color: #fff;
  }
}
  position: absolute;
  height: 50px;
  width: 150px;
  top: 83%;
  left: 57%;
  border: none;
  border-radius: 3px;
  background: #009add;
  box-shadow: 0 0 3px #333;
  cursor: pointer;
  color: #fff;
  &:hover{
    transition: 0.4s ease-out;
    background: #006add;
    color: #fff;
  }
`;

export const Cancel = styled.button`
@media only screen and (max-width: 1280px){
  position: absolute;
  height: 50px;
  width: 150px;
  top: 83%;
  left: 17%;
  border: #ff6b00;
  border-radius: 3px;
  background: none;
  border-color: #ff6b00;
  box-shadow: 0 0 3px #ff6b00;
  cursor: pointer;
  color: #ff6b00;
  &:hover{
    transition: 0.4s ease-out;
    background: none;
    color: #ff6b00;
  }
}
  position: absolute;
  height: 50px;
  width: 150px;
  top: 83%;
  left: 17%;
  border: #ff6b00;
  border-radius: 3px;
  background: none;
  border-color: #ff6b00;
  box-shadow: 0 0 3px #ff6b00;
  cursor: pointer;
  color: #ff6b00;
  &:hover{
    transition: 0.4s ease-out;
    background: none;
    color: #ff6b00;
  }
`;