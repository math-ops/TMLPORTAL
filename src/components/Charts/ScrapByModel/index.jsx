import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

const stackedX = {
  indexAxis: 'x',
  maintainAspectRatio: false,
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
        return `${value} K`;
      }
    },
  },  
  scales: {
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        display: false,
      }
    },
    x: {
      grid: {
        display: false,
      },
      stacked: true
    },
  }
}

export function ChartScrapModel({data}){

  const scrapModelData = {
    labels: data.map((cias) => cias.FAMILIA),
    datasets: [
      {
        label: 'Value',
        data: data.map((cias) => cias.VL_TOTAL.toFixed(0)),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          '#B9CDE5',
          '#B9CDE5',
          '#B9CDE5',
          '#B9CDE5',
          '#B9CDE5',
          '#B9CDE5',
          '#B9CDE5',
          '#B9CDE5',
        ],
        
        datalabels: {
          align:  data.map((cias) => {
            return cias.VL_TOTAL.toFixed(0) > 0 ? 'start' : 'end'
          }),
          anchor: 'end',
          color: '#000',
        },
        options: {
          plugins: {
            datalabels: {
              color: 'white',
              font: {
                weight: 'bold',
              }
            }
          }
        }
      }
    ]
  }

  return(
    <>
      <Bar data={scrapModelData} height={40} width={40} options={stackedX}/>
    </>
  )
}