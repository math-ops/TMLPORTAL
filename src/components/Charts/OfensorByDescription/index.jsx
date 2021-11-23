import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

export function ChartOfensorDescription({ data }) {

  const ofensorClassData = {
    labels: data.map((defects) => defects.DEFECT),
    datasets: [
      {
        label: 'OFENSSOR',
        data: data.map((defects) => defects.VL_TOTAL.toFixed(0)),
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

  return (
    <>
          <Bar data={ofensorClassData} height={20} width={40} options={stackedY} /> 
    </>
  )
}