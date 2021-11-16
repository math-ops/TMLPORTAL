import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

const classificationData = {
  labels: ['Board', 'HP', 'SMT', 'Memoria', 'Baterias', 'Processador', 'OTU', 'Cameras', 'Display', 'Subboard'],
  datasets: [
    {
      label: 'Classification',
      data: [100749, 29170, 22120, 21463, 16326, 10104, 10007, 5262, 4901, 4436],
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
        anchor: 'center',
        color: '#000',       
      }
    }
  ]
}

console.log(classificationData.datasets[0].data);


const config = {
  maintainAspectRatio: false,
  type: 'pie',
  classificationData,
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
        formatter: (val, ctx) => {
          
          return `${ctx.chart.data.labels[ctx.dataIndex]}: ${classificationData.datasets[0].data[0]}`;
        },
        color: '#fff',
      },
  }  
};



export function ChartClassification(){
  return(
    <>
        <Pie data={classificationData} height={230} width={100} options={config}/>
    </>
  )
}