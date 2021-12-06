import styled from "styled-components";

export const TableName = styled.h1`
@media only screen and (max-width: 1280px){
    font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 25px;
  text-shadow: 0px 0px 3px #fff;
  margin-top: 5px;
  margin-bottom: -5px;
}
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 35px;
  text-shadow: 0px 0px 3px #fff;
`;

export const SearchField = styled.h1`
@media only screen and (max-width: 1280px){
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 20px;
    text-shadow: 0px 0px 3px #fff;
    margin-top: 5px;
}
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 25px;
  text-shadow: 0px 0px 3px #fff;
  margin-top: 5px;
`;

export const Container = styled.div`
@media only screen and (max-width: 1280px){
    position: absolute;
    // background-color: #fff;
    height: 80vh;
    width: 50%;
    top: 11%;
    left: 45%;
    border: none;
}
  position: absolute;
  // background-color: #fff;
  height: 80vh;
  width: 50%;
  top: 15%;
  left: 45%;
  border: none;
`;

export const Pesquisa = styled.form`
@media only screen and (max-width: 1280px){
    position: absolute;
    background-color: #fff;
    height: 53vh;
    width: 30%;
    top: 25%;
    left: 7%;
    border: 1px solid #333;
    box-shadow: 0 0 2px #333;
}
  position: absolute;
  background-color: #fff;
  height: 43vh;
  width: 30%;
  top: 25%;
  left: 7%;
  border: 1px solid #333;
  box-shadow: 0 0 2px #333;
`;

export const Campo = styled.input`
@media only screen and (max-width: 1280px){
    position: absolute;
    left: 10%;
    height: 50px;
    width: 80%;
    background: none;
    border: 1px solid #009add;
    border-radius: 5px;
    outline: none;
}
  position: absolute;
  left: 10%;
  height: 50px;
  width: 80%;
  background: none;
  border: 1px solid #009add;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
@media only screen and (max-width: 1280px){
    position: absolute;
    top: 80%;
    left: 33.5%;
    height: 50px;
    width: 33%;
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
  top: 80%;
  left: 33.5%;
  height: 50px;
  width: 30%;
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
