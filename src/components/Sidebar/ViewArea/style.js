import styled from "styled-components";

export const Background = styled.div`
  padding: 0;
  position: absolute;
  background-color: #333;
  width: 100%;
  height: 100%;

`;

export const TableName = styled.h1`
  @media only screen and (max-width: 1280px) {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 30px;
    text-shadow: 0px 0px 1px #fff;
    top: -9%;
    left: 28%;
      color: #fff;
  }
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 35px;
  text-shadow: 0px 0px 1px #fff;
  top: -20%;
  left: 30%;
    color: #fff;
`;

export const Container = styled.div`
  @media only screen and (max-width: 1280px) {
    position: absolute;
    //background-color: #fff;
    height: 80vh;
    width: 50%;
    top: 20%;
    left: 25%;
    border: none;
  }
  position: absolute;
  // background-color: #fff;
  height: 80vh;
  width: 50%;
  top: 27%;
  left: 25%;
  border: none;
`;

export const Campo = styled.select`
  @media only screen and (max-width: 1280px) {
    position: absolute;
    height: 30px;
    width: 20%;
    background: #fff;
    border: 1px solid #009add;
    border-radius: 5px;
    outline: none;
  }
  position: absolute;
  height: 50px;
  width: 23%;
  background: #fff;
  border: 1px solid #009add;
  border-radius: 5px;
  outline: none;
`;

export const SButton = styled.button`
  @media only screen and (max-width: 1280px) {
    position: absolute;
    top: 3%;
    left: 75%;
    height: 30px;
    width: 20%;
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

export const NButton = styled.button`
@media only screen and (max-width: 1280px) {
  position: absolute;
  top: -7%;
  left: 75%;
  height: 30px;
  width: 20%;
  border: none;
  border-radius: 3px;
  background: none;
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
  top: -17%;
  left: 78%;
  height: 20px;
  width: 15%;
  border: none;
  border-radius: 3px;
  background: none;
  box-shadow: 0 0 3px #333;
  cursor: pointer;
  color: #fff;
  &:hover {
    transition: 0.4s ease-out;
    background: #006add;
    color: #fff;
  }
`;
