import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

const trendWeekData = {
  labels: ['W40', 'W41', 'W42'],
  datasets: [
    {
      label: '%',
      type: 'line',
      data: [0.11, 0.39, 0.21],
      borderWidth: 1,
      borderColor: 'red',
      stacked: 'combined',
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: 'red',
      }

    },
    {
      label: 'Week',
      data: [52252, 90090, 58116],
      backgroundColor: [
        '#B9CDE5',
        '#B9CDE5',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 0,
      stacked: 'combined',
      borderColor: 'rgba(0, 0, 0, 0.7)',
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
    },
  ],
}


const trends = {
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
      },
      ticks: {
        display: false,
      }
    },
    x: {
      grid: {
        display: false,
      }
    }
  }
}

export function ChartTrendWeek(){
  return(
    <>
      <Bar data={trendWeekData} height={50} width={50} options={trends}/>
    </>
  )
}
