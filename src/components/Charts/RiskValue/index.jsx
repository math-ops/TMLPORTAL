import React from 'react'
import { Doughnut } from 'react-chartjs-2'


export function ChartRiskValue({data}){

  const riskValueData = {
    labels: data.map((cia)=>cia.CIA),  
    datasets: [
      {
        label: 'Cia',
        data: data.map((cia)=> cia.VL_TOTAL === null ? cia.VL_TOTAL :  cia.VL_TOTAL.toFixed(2)),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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

  return(
    <>
      <Doughnut data={riskValueData} height={50} width={50} options={geral}/>
    </>
  )
}