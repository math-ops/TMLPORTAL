import styled from 'styled-components'

export const Topbar = styled.div`
  position: absolute;
  margin: 0;
  width: 100%;
  height: 140px;
  background: #333;
`;

export const Container = styled.div`
  position: absolute;
  margin-top: 140px;
  width: 100%;
  height: 720px;
  background: #dddd;
`;

export const RiskValue = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: lightblue;
  width: 30%;
  height: 230px;
  margin-left: 5px;
  margin-top: 5px;
`;

export const ScrapOverall = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: lightblue;
  width: 30%;
  height: 230px;
  margin-left: 5px;
  margin-top: 5px;

`;

export const TrendWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: lightblue;
  width: 30%;
  height: 230px;
  margin-left: 5px;
  margin-top: 5px;

`;

export const ScrapModel = styled.div`
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: lightgreen;
  width: 35%;
  height: 230px;
  left: 490px;
  top: 5px;
`;

export const OfensorClass = styled.div`
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  background: lightgreen;
  width: 30%;
  height: 230px;
  left: 900px;
  top: 360px;
`;