import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const riskValueData = {
  labels: ['066', '388'],  
  datasets: [
    {
      label: 'Cia',
      data: [43, 57],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',        
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 0,
      datalabels: {
        align: 'center',
        anchor: 'center',
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

const geral = {
  maintainAspectRatio: false,
  display: false,
  options : {
    plugins: {
      datalabels: {
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        color: 'white',
        labels: {
          title: {
            font: {
              weight: 'bold'
            },
          padding: 6,
          },
          value: {
            color: 'white',
          }
        }
      }
    }
  }
}

export function ChartRiskValue(){
  return(
    <>
      <Doughnut data={riskValueData} height={50} width={50} options={geral}/>
    </>
  )
}