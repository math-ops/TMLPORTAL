import { Topbar, Container, RiskValue, ScrapOverall, TrendWeek, ScrapModel, OfensorClass, Input, Select, Button, Line, Title } from "./style";
import { ChartOfensorClassification, ChartRiskValue, ChartScrapModel, ChartScrapOverall, ChartTrendWeek } from '../Charts/index'


export default function Dashboard(){
  return(
    <>
      <Topbar>
        <Line>
       <Select />
        <Input type="date"/>
        <Input type="date"/>
        </Line>
        <Line>
        <Select />
        <Input type="text" placeholder="campo adicional"/>
        <Input type="text" placeholder="campo adicional"/>
        </Line>
        
      
         
        <Button>Search Report</Button>
      </Topbar>

      <Container> 
        <RiskValue>
          <Title>TML Risk Value $</Title>
          <ChartRiskValue />
        </RiskValue>
        
        {/* <ScrapOverall>
        <Title>TML Scrap Overall</Title>
          <ChartScrapOverall />
        </ScrapOverall>

        <TrendWeek>
        <Title>TML Trend Week</Title>
          <ChartTrendWeek />
        </TrendWeek>

        <ScrapModel>
        <Title>TML Scrap by Model</Title>
          <ChartScrapModel />
        </ScrapModel>

        <OfensorClass>
        <Title>TOP 10 Ofensor by Classification</Title>
          <ChartOfensorClassification />
        </OfensorClass> */}
      </Container>
      
    </>
  )
}

