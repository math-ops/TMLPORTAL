import { Topbar, Container, RiskValue, ScrapOverall, TrendWeek, ScrapModel, OfensorClass } from "./style";


export default function Dashboard(){
  return(
    <>
      <Topbar>

      </Topbar>
      <Container> 
        <RiskValue />
        <ScrapOverall />
        <TrendWeek />

        <ScrapModel />
        <OfensorClass />
      </Container>
      
    </>
  )
}

