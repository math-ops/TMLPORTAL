import * as React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import '../../Dashboard/style.css'


//criando o spinner
// import  CircularProgress  from '@mui/material/CircularProgress'


Chart.register(ChartDataLabels);

export function ChartClassification({data}){

  const classificationData = {
    labels: data.map((itens)=> itens.FAMILIA),
    datasets: [
      {
        label: 'Classification',
        data: data.map((itens)=> itens.PERCENT.toFixed(0)),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        datalabels: {
          align: 'end',
          anchor: 'botton',
          color: '#000',    
          rotation:'0'
        }
      }
    ]
  }
  
  const config = {
    maintainAspectRatio: false,
    type: 'pie',
    classificationData,
    rotation: 45,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: 'Chart.js Pie Chart'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      labels: {
        render: 'label',
      },
        datalabels: {
          display: true,
          formatter: (value, ctx) => {
            
            return `${ctx.chart.data.labels[ctx.dataIndex]}: ${value}`;
          },
          color: '#fff',
        },
    }  
  };

  return(
    <>
        <Pie data={classificationData} height={80} width={100} options={config}/>
    </>
  )
}