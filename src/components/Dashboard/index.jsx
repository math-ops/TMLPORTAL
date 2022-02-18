import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { Container, RiskValue, ScrapOverall, TrendWeek, ScrapModel, OfensorClass, ScrapByShift, Classification, Filter, Line, Title } from './style'
import PersistentDrawerLeft from '../Sidebar/index'
import { ChartScrapByShift } from '../Charts/ScrapByShift'
import { ChartRiskValue } from '../Charts/RiskValue'
import { ChartScrapOverall } from '../Charts/MaterialScrapOverall'
import { ChartTrendWeek } from '../Charts/MaterialTrendWeek'
import { ChartScrapModel } from '../Charts/ScrapByModel'
import { ChartClassification } from '../Charts/ScrapByClassification'
import { ChartOfensorDescription } from '../Charts/OfensorByDescription'
import { SpinnerSm, SpinnerBg, SpinnerTw } from '../Spinner';
import moment from 'moment'
import 'moment/locale/pt-br'
import './style.css'
import axios from '../../services/api'
import { FiltroContext } from '../../provider/filtros';



export default function Dashboard() {

  const [dataRiskValue, setDataRiskValue] = useState([]);
  const [dataScrapModel, setDataScrapModel] = useState([]);
  const [dataDefectClassification, setDataDefectClassification] = useState([]);
  const [dataScrapByShift, setDataScrapByShift] = useState([]);
  const [dataScrapClassification, setDataScrapClassification] = useState([]);
  const [dataTrendWeek, setDataTreendWeek] = useState([]);

  const [processingDefectClassification, setProcessDefectClassification] = useState(true)
  const [processingRiskValue, setProcessRiskValue] = useState(true)
  const [processingScrapModel, setProcessScrapModel] = useState(true);
  const [processingScrapByShift, setProcessScrapByShift] = useState(true);
  const [processingScrapClassification, setProcessScrapClassification] = useState(true);
  const [processingDataTreendWeek, setProcessTreendWeek] = useState(true);

  const {
    cia,
    // eslint-disable-next-line
    setCia,
    area,
    // eslint-disable-next-line
    setArea,
    dataInicio,
    // eslint-disable-next-line
    setDataInicio,
    dataFim,
    // eslint-disable-next-line
    setDataFim,
    resultado,
    // eslint-disable-next-line
    setResultado,
    isSearch,
    // eslint-disable-next-line
    setIsSearch
  } = React.useContext(FiltroContext);

  useEffect(() => {

    const dataInicio_param = moment(dataInicio).format("DD-MM-YYYY").toString();
    const dataFim_param = moment(dataFim).format("DD-MM-YYYY").toString();
    console.log(dataInicio_param, dataFim_param);

    (async () => {

      setProcessDefectClassification(true);
      setProcessRiskValue(true);
      setProcessScrapModel(true);
      setProcessScrapByShift(true);
      setProcessScrapClassification(true);
      setProcessTreendWeek(true);

      const [
        res_RiskValue,
        res_ScrapModel,
        res_DefectClassification,
        res_ScrapByShift,
        res_ScrapClassification,
        res_TrendWeek,
      ] = await Promise.all([
        axios.get(`dmr/site/${cia}/${area}/${dataInicio_param}/${dataFim_param}/${resultado}`),
        axios.get(`dmr/family/${cia}/${area}/${dataInicio_param}/${dataFim_param}/${resultado}/1001`),
        axios.get(`dmr/defect/${cia}/${area}/${dataInicio_param}/${dataFim_param}/${resultado}`),
        axios.get(`dmr/shift/${cia}/${area}/${dataInicio_param}/${dataFim_param}/${resultado}`),
        axios.get(`dmr/family/${cia}/${area}/${dataInicio_param}/${dataFim_param}/${resultado}/999001`),
        axios.get(`dmr/week/${cia}/${area}/${dataInicio_param}/${dataFim_param}/${resultado}`),
      ]);

      setProcessDefectClassification(false);
      setProcessRiskValue(false);
      setProcessScrapModel(false);
      setProcessScrapByShift(false);
      setProcessScrapClassification(false);
      setProcessTreendWeek(false);


      setDataRiskValue(res_RiskValue.data);
      setDataScrapModel(res_ScrapModel.data);
      setDataDefectClassification(res_DefectClassification.data);
      setDataScrapByShift(res_ScrapByShift.data);
      setDataScrapClassification(res_ScrapClassification.data);
      setDataTreendWeek(res_TrendWeek.data);

    })();
    // eslint-disable-next-line
  }, [isSearch]);


  return (
    <>
      <PersistentDrawerLeft />

      <Container>
        <RiskValue>
          <Title>Material Risk Value $</Title>
          <Line>
            {
              processingRiskValue ?
                <SpinnerSm />
                :
                <ChartRiskValue data={dataRiskValue} />
            }
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
            {processingDataTreendWeek ?
              <SpinnerTw /> :
              <ChartTrendWeek data={dataTrendWeek} />
            }
          </Line>

      </TrendWeek>

      <ScrapModel>
        <Title>Material Scrap by Model</Title>
        <Line className="sbm">
          <div className="charts">
            {processingScrapModel ?
              <SpinnerBg />
              :
              <ChartScrapModel data={dataScrapModel} />
            }
          </div>
        </Line>
      </ScrapModel>

      <Classification>
        <Title>Material Scrap by Classification</Title>
        <Line className="sbc">
          {
            processingScrapClassification ?
              <SpinnerBg />
              :
              <ChartClassification data={dataScrapClassification} />
          }
        </Line>
      </Classification>

      <OfensorClass>
        <Title>TOP 10 Ofensor by Defect Description</Title>
        <Line className="sbm">
          {
            processingDefectClassification ?

              <SpinnerBg />
              :
              <ChartOfensorDescription data={dataDefectClassification} />

          }
        </Line>
      </OfensorClass>

      <ScrapByShift>
        <Title>Material Scrap By Shift</Title>
        <Line className="sbs">
          {
            processingScrapByShift ?
              <SpinnerBg />
              :
              <ChartScrapByShift data={dataScrapByShift} />
          }
        </Line>
      </ScrapByShift>
    </Container>

    </>
  )
}

