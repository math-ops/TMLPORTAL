import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

const ofensorClassData = {
  labels: ['M. SOLDA', 'H. FORNECEDOR', 'CURTO E SOLDA', 'COBRE EXPOSTO', 'EXCS DE REPARO', 'CONECTOR DANIFICADO', 'PROC COM CURTO', 'EXCS RETRABALHO', 'INSF DE SOLDA', 'ERRO DE REPARO'],
  datasets: [
    {
      label: 'OFENSSOR',
      data: [21964, 10839, 8078, 7642, 7472, 5430, 5124, 4683, 4381, 3951],
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
        align: 'start',
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

const stackedY = {
  indexAxis: 'y',
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
      ticks: {
        beginAtZero: true
      }
    },
    x: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        display: false,
      },
      stacked: true
    },
  }
}


export function ChartOfensorDescription(){
  return(
    <>
      <Bar data={ofensorClassData} height={20} width={40} options={stackedY}/>
    </>
  )
}