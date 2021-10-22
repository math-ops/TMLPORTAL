import React from 'react'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'


const riskValueData = {
  labels: ['066', '388'],  
  datasets: [
    {
      label: 'Shifts',
      data: [43, 57],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',        
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 0,
    },
  ],
  
}

const scrapByShiftData = {
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

const scrapOverallData = {
  labels: ['Geral', 'BE', 'CAR', 'FE', 'HP', 'MRB', 'CFC', 'DECATHLON'],
  datasets: [
    {
      label: '$',
      data: [187399, 59096, 55408, 47991, 20692, 3288, 930, 22],
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
    },
  ],
}

const trendWeekData = {
  labels: ['W40', 'W41', 'W42'],
  datasets: [
    {
      label: 'Week',
      data: [25252, 90090, 58116],
      backgroundColor: [
        '#B9CDE5',
        '#B9CDE5',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const scrapModalData = {
  labels: ['CAPRIPLUS', 'JAVA', 'MALTA', 'HP', 'HANOIPLUS', 'FUJI SC', 'MALTA LITE', 'ARUBA', 'HANOI', 'CAPRI ROW'],
  datasets: [
    {
      label: 'MODEL',
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
      ]
    }
  ]
}

const ofensorClassData = {
  labels: ['MIGRACAO DE SOLDA', 'HOUSING FORNECEDOR', 'CURTO E SOLDA', 'COBRE EXPOSTO', 'EXCESSO DE REPARO', 'CONECTOR CABO FLAT DANIFICADO', 'PROCESSADOR COM CURTO', 'EXCESSO RETRABALHO', 'INSUFICIENCIA DE SOLDA', 'ERRO DE REPARO'],
  datasets: [
    {
      label: 'Error',
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
      ]
    }
  ]
}

const classificationData = {
  labels: ['Board', 'HP', 'SMT', 'Memoria', 'Baterias', 'Processador', 'OTU', 'Cameras', 'Display', 'Subboard'],
  datasets: [
    {
      label: 'Classes',
      data: [100749, 29170, 22120, 21463, 16326, 10104, 10007, 5262, 4901, 4436],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ]
    }
  ]
}


const geral = {
  maintainAspectRatio: false,
  display: false,
}

const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false, 
}

const stackedX = {
  indexAxis: 'x',
  maintainAspectRatio: false,
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
      stacked: true
    },
  }
}

const stackedY = {
  indexAxis: 'y',
  maintainAspectRatio: false,
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
      stacked: true
    },
  }
}




export function ChartRiskValue(){
  return(
    <>
      <Doughnut data={riskValueData} height={50} width={50} options={geral}/>
    </>
  )
}

export function ChartScrapOverall(){
  return(
    <>
      <Bar data={scrapOverallData} height={50} width={50} options={options} />
    </>
  )
}

export function ChartTrendWeek(){
  return(
    <>
      <Line data={trendWeekData} height={50} width={50} options={{maintainAspectRatio: false,}}/>
    </>
  )
}

export function ChartScrapModel(){
  return(
    <>
      <Bar data={scrapModalData} height={40} width={40} options={stackedX}/>
    </>
  )
}

export function ChartOfensorClassification(){
  return(
    <>
      <Bar data={ofensorClassData} height={40} width={40} options={stackedY}/>
    </>
  )
}

export function ChartScrapByShift(){
  return(
    <>
      <Doughnut data={scrapByShiftData} height={230} width={100} options={geral}/>
    </>
  )
}

export function ChartClassification(){
  return(
    <>
        <Pie data={classificationData} height={230} width={100} options={geral}/>
    </>
  )
}