import styled from 'styled-components'

const light = '#fff';
const gray = '#dddd';
const dark = '#333';


export const Topbar = styled.div`
@media only screen and (max-width: 1280px){
  position: absolute;
  margin: 0;
  width: 100%;
  height: 23vh;
  background: ${dark};
}
  position: absolute;
  margin: 0;
  width: 100%;
  height: 140px;
  background: ${dark};
`;

export const Line = styled.div`
@media only screen and (max-width: 1280px){

}
`;

export const Container = styled.div`
@media only screen and (max-width: 1280px){
  position: absolute;
  top: 60px;
  width: 100%;  
  height: 93vh;
  background: ${gray};
}
  position: absolute;
  top: 65px;
  width: 100%;
  height: 720px;
  background: ${gray};
`;

export const RiskValue = styled.div`
@media only screen and (max-width: 1280px){
  /* display: flexbox;
  grid-template-columns: repeat(1, 1fr); */
  background: ${light};
  width: 30%;
  height: 30vh;
  margin-left: 5px;
  margin-top: 5px;
}
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${light};
  width: 30%;
  height: 230px;
  margin-left: 5px;
  margin-top: 5px;
`;

export const ScrapOverall = styled.div`
@media only screen and (max-width: 1280px){
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${light};
  width: 30%;
  height: 30vh;
  margin-left: 5px;
  margin-top: 5px;
}
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${light};
  width: 30%;
  height: 230px;
  margin-left: 5px;
  margin-top: 5px;

`;

export const TrendWeek = styled.div`
@media only screen and (max-width: 1280px){
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${light};
  width: 30%;
  height: 29vh;
  margin-left: 5px;
  margin-top: 5px;
}
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${light};
  width: 30%;
  height: 230px;
  margin-left: 5px;
  margin-top: 5px;

`;

export const ScrapModel = styled.div`
@media only screen and (max-width: 1280px){
  /* position: absolute;
  grid-template-columns: repeat(2, 1fr); */
  background: ${light};
  width: 35%;
  height: 45vh;
  left: 390px;
  top: 5px;
}
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 35%;
  height: 43vh;
  left: 490px;
  top: 5px;
`;

export const Classification = styled.div`
@media only screen and (max-width: 1280px){
  /* position: absolute;
  grid-template-columns: repeat(2, 1fr); */
  background: ${light};
  width: 35%;
  height: 45vh;
  left: 390px;
  top: 290px;
}
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 35%;
  height: 44vh;
  left: 490px;
  top: 355px;
`;

export const OfensorClass = styled.div`
@media only screen and (max-width: 1280px){
  /* position: absolute;
  grid-template-columns: repeat(2, 1fr); */
  background: ${light};
  width: 33.5%;
  height: 45vh;
  left: 835px;
  top: 5px;
}
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 33.5%;
  height: 43vh;
  left: 1055px;
  top: 5px;
`;

export const ScrapByShift = styled.div`
@media only screen and (max-width: 1280px){
  /* position: absolute;
  grid-template-columns: repeat(2, 1fr); */
  background: ${light};
  width: 33.5%;
  height: 45vh;
  left: 835px;
  top: 290px;
}
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: ${light};
  width: 33.5%;
  height: 44vh;
  left: 1055px;
  top: 355px;
`;

export const Input = styled.input`
@media only screen and (max-width: 1280px){
  display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 140px;
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
  width: 170px;
  height: 40px;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;


`;

export const Select = styled.select`
  @media only screen and (max-width: 1280px){
  display: inline-block;
  position: relative;
  background: #eee;
  border: solid 1px #000;
  width: 140px;
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
  width: 170px;
  height: 40px;
  left: 60px;
  top: -5px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const Option = styled.option`
@media only screen and (max-width: 1280px){

}
`;

export const Label = styled.label`
@media only screen and (max-width: 1280px){
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
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
@media only screen and (max-width: 1280px){
  position: relative;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
  background: greenyellow;
  left: 70px;
  top: 0px;
}
  position: relative;
  border: none;
  width: 70px;
  height: 40px;
  cursor: pointer;
  background: greenyellow;
  left: 80px;
  top: 0px;

`;

export const Search = styled.img`
  @media only screen and (max-width: 1280px){
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
  @media only screen and (max-width: 1280px){
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
  @media only screen and (max-width: 1280px){
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
  @media only screen and (max-width: 1280px){
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