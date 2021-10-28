import { Topbar, Logo, Container, RiskValue, ScrapOverall, TrendWeek, ScrapModel, OfensorClass, ScrapByShift, Classification, Label, Filter, Input, Select, Option, Button, Search, Line, Title, Date } from './style'
import { ChartOfensorClassification, ChartRiskValue, ChartScrapModel, ChartScrapOverall, ChartTrendWeek, ChartScrapByShift, ChartClassification } from '../Charts/index'
import moment from 'moment'
import 'moment/locale/pt-br'
import './style.css'
import search from '../../styles/img/search.svg'

const range = moment().format('DD-MM-YYYY, h:mm:ss a');


export default function Dashboard(){
  return(
    <>
      <Topbar>
        <Logo>TML Overview</Logo>
        <Date>Data: {range}</Date>


        <Line>
        <Label>Cia.:</Label>
       <Select>
          <Option value="066">066</Option>
          <Option value="338">338</Option>
       </Select>

        <Label>Data Inicio:</Label>
        <Input type="date"/>

       <Label>Data Final:</Label>
        <Input type="date"/>

        <Label>Resultado:</Label>
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

        {/* <Select>Campo</Select>      */}
        </Line>

      
         
        <Button><Search src={search} /></Button>
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
        <Line className="ctw">
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter> 
          <ChartTrendWeek />
                  
          </Line>
        </TrendWeek>

        <ScrapModel>
        <Title>Material Scrap by Model</Title>
        <Line className="sbm">  
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>        
          <ChartScrapModel />
        </Line>
          
        </ScrapModel>

        <Classification>
          <Title>Material Scrap by Classification</Title>
          <Line className="sbs">
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
            <ChartClassification />
          </Line>
        </Classification>

        <OfensorClass>
        <Title>TOP 10 Ofensor by Defect Description</Title>
        <Line className="sbm">
          <Filter></Filter> 
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>           
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

