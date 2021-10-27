import { Topbar, Logo, Container, RiskValue, ScrapOverall, TrendWeek, ScrapModel, OfensorClass, ScrapByShift, Classification, Input, Select, Option, Button, Line, Title, Date } from './style'
import { ChartOfensorClassification, ChartRiskValue, ChartScrapModel, ChartScrapOverall, ChartTrendWeek, ChartScrapByShift, ChartClassification } from '../Charts/index'
import moment from 'moment'
import 'moment/locale/pt-br'
import './style.css'

const range = moment().format('L - h:mm A');


export default function Dashboard(){
  return(
    <>
      <Topbar>
        <Logo>TML Overview</Logo>
        <Date>Data: {range}</Date>
        
      

      
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

        {/* <Select>Campo</Select>      */}
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
        <Option>Falhas</Option>
        </Select>
        </Line>
        
      
         
        <Button>Search Report</Button>
      </Topbar>

      <Container> 
        <RiskValue>
          <Title>Material Risk Value $</Title>
          <Line>
          <ChartRiskValue />
          </Line>          
        </RiskValue>
        
        <ScrapOverall>
        <Title>Material Scrap Overall</Title>
        <Line className="cso">
          <ChartScrapOverall />
        </Line>
        </ScrapOverall>

        <TrendWeek>
        <Title>Material Trend Week</Title>
        <Line>
          <ChartTrendWeek />        
          </Line>
        </TrendWeek>

        <ScrapModel>
        <Title>Material Scrap by Model</Title>
        <Line className="sbm">
          <ChartScrapModel />
        </Line>
          
        </ScrapModel>

        <Classification>
          <Title>Material Scrap by Classification</Title>
          <Line className="sbs">
            <ChartClassification />
          </Line>
        </Classification>

        <OfensorClass>
        <Title>TOP 10 Ofensor by Defect Description</Title>
        <Line className="sbm">          
          <ChartOfensorClassification />         
        </Line>
        </OfensorClass>

        <ScrapByShift>
          <Title>Material Scrap By Shift</Title>
          <Line className="sbs">
          <ChartScrapByShift />
          </Line>          
        </ScrapByShift>
      </Container>
      
    </>
  )
}

