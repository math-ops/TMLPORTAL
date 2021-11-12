import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

const scrapOverallData = {
  labels: ['Geral', 'BE', 'CAR', 'FE', 'HP', 'MRB', 'CFC', 'DEC'],
  datasets: [
    {
      label: 'Value in K',
      data: [187339, 59096, 55408, 47991, 20692, 3288, 930, 22],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        '#B9CDE5',
        '#B9CDE5',
        '#B9CDE5',
        '#B9CDE5',
        '#B9CDE5',
        '#B9CDE5',
      ],
      borderWidth: 0,
      stacked: 'combined',
      type: 'bar',
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
    },
    {
      label: '%',
      data: [0.8, 0.25, 0.24, 0.21, 0.09, 0.01, 0, 0],
      borderWidth: 0,
      stack: 'combined',
      datalabels: {
        align: 'right',
        anchor: 'end',
        color: 'red',

      }
    }
  ],
}

const options = {
  indexAxis: 'y',
  responsive: true,
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
      grid: {
        display: false,
      }
    },
    x: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        display: false,
      }
    }
  }
}

export function ChartScrapOverall(){
  return(
    <>
      <Bar data={scrapOverallData} height={50} width={50} options={options} />
    </>
  )
}