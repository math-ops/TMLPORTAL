import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'


const riskValueData = {
  labels: ['1º Turno', '2º Turno','3º Turno'],
  datasets: [
    {
      label: 'Shifts',
      data: [43, 40, 17],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',        
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 0,
    },
  ],
}



const data = {
  labels: ['RED', 'BLUE', 'YELLOW', 'GREEN', 'PURPLE', 'ORANGE'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0,
    },
  ],
}


const stackedData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
}

const geral = {
  maintainAspectRatio: false,
}

const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  height: '20px',
  width: '20px',
}

const stacked = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true
      }
    },
    x: {
      stacked: true
    },
  }
}




export function ChartRiskValue(){
  return(
    <>
      <Doughnut data={riskValueData}  style={{
        marginTop: '-10px',
        marginLeft: '10px',
        height: '150px',
        width: '350px',
        alignItems: 'center',
      }} options={geral}/>
    </>
  )
}

export function ChartScrapOverall(){
  return(
    <>
      <Bar data={data} height={2} width={2} options={options} />
    </>
  )
}

export function ChartTrendWeek(){
  return(
    <>
      <Line data={data} height={2} width={2} options={{maintainAspectRatio: false,}}/>
    </>
  )
}

export function ChartScrapModel(){
  return(
    <>
      <Bar data={stackedData} height={60} width={40} options={stacked}/>
    </>
  )
}

export function ChartOfensorClassification(){
  return(
    <>
      <Bar data={stackedData} height={60} width={40} options={stacked}/>
    </>
  )
}