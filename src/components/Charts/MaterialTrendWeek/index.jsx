import * as React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

//criando o spinner
import CircularProgress from '@mui/material/CircularProgress'

Chart.register(ChartDataLabels);

export function ChartTrendWeek({ data }) {

  const trendWeekData = {
    labels: data.map((dataWeek) => dataWeek.WEEK),
    datasets: [
      {
        label: '%',
        type: 'line',
        data: data.map((dataWeek) => dataWeek.PERCENT.toFixed(0)),
        borderWidth: 1,
        borderColor: 'red',
        stacked: 'combined',
        datalabels: {
          align: 'start',
          anchor: 'botton',
          color: 'red',
          formatter: (value, ctx) => {
            return `${value} %`;
          }
        }

      },
      {
        label: 'Week',
        data: data.map((dataWeek) => dataWeek.VL_TOTAL.toFixed(0)),
        backgroundColor: [
          '#B9CDE5',
          '#B9CDE5',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 0,
        stacked: 'combined',
        borderColor: 'rgba(0, 0, 0, 0.7)',
        datalabels: {
          align: 'botton',
          anchor: 'end',
          color: '#000',
          formatter: (value, ctx) => {
            return `${value} K`;
          }
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: 'white',
              font: {
                weight: 'bold',
              }
            }
          },
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
      },
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

  return (
    <Bar data={trendWeekData} height={50} width={50} options={trends} marging={10} />
  )
}