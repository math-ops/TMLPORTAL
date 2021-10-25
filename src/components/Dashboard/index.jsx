import { Topbar, Container, RiskValue, ScrapOverall, TrendWeek, ScrapModel, OfensorClass, ScrapByShift, Classification, Input, Select, Option, Button, Line, Title } from './style'
import { ChartOfensorClassification, ChartRiskValue, ChartScrapModel, ChartScrapOverall, ChartTrendWeek, ChartScrapByShift, ChartClassification } from '../Charts/index'
import './style.css'


export default function Dashboard(){
  return(
    <>
      <Topbar>
      

      
        <Line>
       <Select>
          <Option value="#">CIA</Option>
          <Option value="066">066</Option>
          <Option value="338">338</Option>
       </Select>

        <Input type="date"/>

        <Input type="date"/>

        <Select>
          <Option>ALL</Option>
          <Option>RTV</Option>
          <Option>UAI</Option>
          <Option>REW</Option>
          <Option>SCRP</Option>
          <Option>HLD</Option>
          <Option>Cancelada</Option>
          <Option>E-SCRP</Option>
          <Option>RTC</Option>
          <Option>MRB</Option>
          <Option>SCRP/E-SCRP</Option>
        </Select>

        <Select>
        <Option>Linha</Option>
        </Select>      
        </Line>

        <Line>
        <Select>
        <Option>Turno</Option>
        <Option>1º Turno</Option>
        <Option>2º Turno</Option>
        <Option>3º Turno</Option>
        </Select>

        <Select>
        <Option>Segmento</Option>
        </Select>

        <Select>
        <Option>Area</Option>
        </Select>

        <Select>
        <Option>Classificação</Option>
        </Select>

        <Select>
        <Option>Areas</Option>
        </Select>
        </Line>
        
      
         
        <Button>Search Report</Button>
      </Topbar>

      <Container> 
        <RiskValue>
          <Title>TML Risk Value $</Title>
          <Line>
          <ChartRiskValue />
          </Line>          
        </RiskValue>
        
        <ScrapOverall>
        <Title>TML Scrap Overall</Title>
        <Line>
          <ChartScrapOverall />
        </Line>
        </ScrapOverall>

        <TrendWeek>
        <Title>TML Trend Week</Title>
        <Line>
          <ChartTrendWeek />        
          </Line>
        </TrendWeek>

        <ScrapModel>
        <Title>TML Scrap by Model</Title>
        <Line className="sbm">
          <ChartScrapModel />
        </Line>
          
        </ScrapModel>

        <Classification>
          <Title>Classification</Title>
          <Line>
            <ChartClassification />
          </Line>
        </Classification>

        <OfensorClass>
        <Title>TOP 10 Ofensor by Classification</Title>
        <Line className="sbm">          
          <ChartOfensorClassification />         
        </Line>
        </OfensorClass>

        <ScrapByShift>
          <Title>Scrap By Shift</Title>
          <Line>
          <ChartScrapByShift />
          </Line>          
        </ScrapByShift>
      </Container>
      
    </>
  )
}

