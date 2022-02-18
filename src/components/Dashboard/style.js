import styled from 'styled-components'
import px2vw from '../../styles/utils/px2vw'

const light = '#fff';
const dark = '#333';

export const Line = styled.div`
@media only screen and (min-width: 1366px){

}
`;

export const Container = styled.div`
  position: absolute;
  top: 68px;
  width: 100%;
  height: 720px;
  background: ${dark};
  @media (min-width: 1024px){
    top: 65px;
    width: 100%;  
    height: 93vh;
  }
`;

//CHARTS

export const RiskValue = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${light};
  width: 30%;
  height: 235px;
  margin-left: 5px;
  margin-top: 5px;
  @media (min-width: 1024px)  {
    height: 29.3vh;
    margin-top: 3px;
  }
  @media (min-width: 1440px){
    height: 29.3vh;
    margin-top: 5px;
  }


`;

export const ScrapOverall = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${light};
  width: 30%;
  height: 235px;
  margin-left: 5px;
  margin-top: 5px;
  @media (min-width: 1024px){
    height: 29.3vh;
    margin-top: 3px;
  }
  @media (min-width: 1440px){
    height: 29.3vh;
    margin-top: 5px;
  }
`;

export const TrendWeek = styled.div`
  display: flex-inline;
  flex-direction: column;
  background: ${light};
  width: 30%;  
  margin-left: 5px;
  height: 235px;
  @media (min-width: 1024px){
    height: 29.3vh;
    margin-top: 3px;
  }
  @media (min-width: 1440px){
    height: 29.3vh;
    margin-top: 5px;
  }

`;

export const ScrapModel = styled.div`
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 35%;
  height: 43vh;
  left: 490px;
  top: 5px;
  @media (min-width: 1024px){
    height: 44vh;
    left: ${px2vw(435)};
    top: ${px2vw(3)};
  }

  @media (min-width: 1440px){
    height: 44vh;
    left: ${px2vw(435)};
    top: ${px2vw(5)};
  }
`;

export const Classification = styled.div`
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 35%;
  height: 44.4vh;
  left: 490px;
  top: 360px;
  @media (min-width: 1024px){
    height: 44.5vh;
    left: ${px2vw(435)};
    top: ${px2vw(315)};
  }

  @media (min-width: 1440px){
    height: 44.5vh;
    left: ${px2vw(435)};
    top: ${px2vw(322)};
  }
`;

export const OfensorClass = styled.div`
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 33.5%;
  height: 43vh;
  left: 1055px;
  top: 5px;
  @media (min-width: 1024px){
    height: 44vh;
    left: ${px2vw(938)};
    top: ${px2vw(3)};
  }

  @media (min-width: 1440px){
    height: 44vh;
    left: ${px2vw(938)};
    top: ${px2vw(5)};
  }
`;

export const ScrapByShift = styled.div`
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 33.5%;
  height: 44.4vh;
  left: 1055px;
  top: 360px;
  @media (min-width: 1024px){
    height: 44.5vh;
    left: ${px2vw(938)};
    top: ${px2vw(315)};
  }

  @media (min-width: 1440px){
    height: 44.5vh;
    left: ${px2vw(938)};
    top: ${px2vw(322)};
  }
`;

//TOPBAR

export const Input = styled.input`
@media (min-width: 1366px){
  display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 125px;
  height: 40px;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;
}
  display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 125px;
  height: 40px;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;


`;

export const Select = styled.select`
  @media only screen and (min-width: 1366px){
  display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 120px;
  height: 40px;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;
  }
  display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 125px;
  height: 40px;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const Option = styled.option`
@media only screen and (min-width: 1366px){

}
`;

export const Label = styled.label`
@media only screen and (min-width: 1366px){
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: ${light};
  display: inline-block;
  position: relative;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;
}
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${light};
  display: inline-block;
  position: relative;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  position: relative;
  border: none;
  width: 90px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  background: greenyellow;
  left: 85px;
  top: 0px;
  &:hover{
    background: 	#22bb33;
    transition: 0.4s ease-out;
  }
  @media only screen and (min-width: 1024px){
    width: 40px;
    height: 40px;
    border-radius: 15px;
    cursor: pointer;
    background: greenyellow;
    left: ${px2vw(80)};
    top: 0px;
    &:hover{
      background: 	#22bb33;
      transition: 0.4s ease-out;
    }
  }

`;

export const Download = styled.button`
  position: relative;
  border: none;
  width: 50px;
  height: 40px;
  cursor: pointer;
  background: #dddddd;
  border-radius: 4px;
  left: 150px;
  top: 0px;
  &:hover{
    background: 	#aaaaaa;
    transition: 0.4s ease-out;
  }
  @media only screen and (min-width: 1024px){
    width: 40px;
    height: 40px;
    border-radius: 15px;
    left: ${px2vw(100)};
    top: 0px;
    &:hover{
      background: 	#fff;
      transition: 0.4s ease-out;
    }
  }

`;

export const Search = styled.img`
  @media only screen and (min-width: 1366px){
    height: 20px;
    width: 20px;    
  }
    height: 23px;
    width: 23px;
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: ${dark};

`;

export const Logo = styled.h1`
  @media only screen and (min-width: 1366px){
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: ${light};
    left: 15px;
    top: 35px;
  }
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: ${light};
    left: 15px;
    top: 35px;
`;

export const Date = styled.h2`
  @media only screen and (min-width: 1366px){
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${light};
    left: 20px;
    top: 75px;
  }
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${light};
    left: 20px;
    top: 75px;
`;

export const Filter = styled.select`
  @media only screen and (min-width: 1366px){
    display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 70px;
  height: 20px;
  left: 75px;
  top: 0px;
  margin-right: 10px;
  margin-top: 10px;
  }
  display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 70px;
  height: 20px;
  left: 130px;
  top: 0px;
  margin-right: 10px;
  margin-top: 10px;
`;