import { Container, RiskValue, ScrapOverall, TrendWeek, ScrapModel, OfensorClass, ScrapByShift, Classification, Filter, Line, Title} from './style'
import PersistentDrawerLeft from '../Sidebar/index'
import { ChartScrapByShift } from '../Charts/ScrapByShift'
import { ChartRiskValue } from '../Charts/RiskValue'
import { ChartScrapOverall } from '../Charts/MaterialScrapOverall'
import { ChartTrendWeek } from '../Charts/MaterialTrendWeek'
import { ChartScrapModel } from '../Charts/ScrapByModel'
import { ChartClassification } from '../Charts/ScrapByClassification'
import { ChartOfensorDescription } from '../Charts/OfensorByDescription'
// import moment from 'moment'
import 'moment/locale/pt-br'
import './style.css'


// const range = moment().format('DD-MM-YYYY, h:mm:ss a');


export default function Dashboard(){
  return(
    <>
      <PersistentDrawerLeft />
      

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
          <Filter className="selects"></Filter>
          <Filter className="selects"></Filter>
          <Filter className="selects"></Filter>
          <Filter className="selects"></Filter> 
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
          <Filter className="selects"></Filter>
          <Filter className="selects"></Filter>
          <Filter className="selects"></Filter>
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
          <ChartOfensorDescription />         
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

