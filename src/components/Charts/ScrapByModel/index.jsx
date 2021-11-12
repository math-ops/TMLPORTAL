import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

const scrapModelData = {
  labels: ['CAPRIPLUS', 'JAVA', 'MALTA', 'HP', 'HANOIPLUS', 'FUJI SC', 'MALTA LITE', 'ARUBA', 'HANOI', 'CAPRI ROW'],
  datasets: [
    {
      label: 'Value',
      data: [28269, 26401, 24325, 21472, 18027, 17734, 17712, 13247, 11132, 3762],
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
        align: 'end',
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

const stackedX = {
  indexAxis: 'x',
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    labels: {
      render: 'label',
    }
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

export function ChartScrapModel(){
  return(
    <>
      <Bar data={scrapModelData} height={40} width={40} options={stackedX}/>
    </>
  )
}