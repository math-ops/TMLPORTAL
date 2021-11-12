import React from 'react'
import {Doughnut } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

//definindo os gráficos

const scrapByShiftData = {
  labels: ['1º Turno', '2º Turno','3º Turno'],  
  datasets: [
    {
      label: 'Shifts',
      data: [43, 40, 17],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',        
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 0,
      datalabels: {
        align: 'center',
        anchor: 'center',
        color: '#000',
      }
    },
  ],
  
}
//configurações de exibição dos gráficos

const config = {
  maintainAspectRatio: false,
  scrapByShiftData,
    plugins: {
      datalabels: {
          formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              // eslint-disable-next-line array-callback-return
              dataArr.map(data => {
                  sum += data;
              });
              let percentage = (value*100 / sum).toFixed(2)+"%";
              return percentage;
          },
          color: '#fff',
      }
  }
  
}

export function ChartScrapByShift(){
  return(
    <>
      <Doughnut data={scrapByShiftData} height={230} width={100} options={config}/>
    </>
  )
}

