import styled from "styled-components";

export const TableName = styled.h1`
  @media only screen and (max-width: 1280px) {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 25px;
    text-shadow: 0px 0px 3px #fff;
    margin-top: 5px;
    margin-bottom: -5px;
    color: #333;
  }
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 35px;
  text-shadow: 0px 0px 3px #fff;
  top: -17%;
  left: 30%;
  color: #333;
`;

export const Container = styled.div`
  @media only screen and (max-width: 1280px) {
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
  top: 28%;
  left: 25%;
  border: none;
`;

export const Campo = styled.select`
  @media only screen and (max-width: 1280px) {
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
  height: 50px;
  width: 23%;
  background: none;
  border: 1px solid #009add;
  border-radius: 5px;
  outline: none;
`;

export const Input = styled.input`
  @media only screen and (max-width: 1280px) {
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
  padding: 5px;
  height: 50px;
  width: 23%;
  background: none;
  border: 1px solid #009add;
  border-radius: 5px;
  outline: none;
`;

export const SButton = styled.button`
  @media only screen and (max-width: 1280px) {
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
    &:hover {
      transition: 0.4s ease-out;
      background: #006add;
      color: #fff;
    }
  }
  position: absolute;
  top: -8%;
  left: 73%;
  height: 50px;
  width: 23%;
  border: none;
  border-radius: 3px;
  background: #009add;
  box-shadow: 0 0 3px #333;
  cursor: pointer;
  color: #fff;
  &:hover {
    transition: 0.4s ease-out;
    background: #006add;
    color: #fff;
  }
`;
