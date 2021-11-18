import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useEffect, useState } from 'react'

//criando o spinner
import  CircularProgress  from '@mui/material/CircularProgress'

export default function Spinner(){
  const [level, setLevel] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLevel((nextLevel) => nextLevel >= 100 ? 0 : nextLevel + 25);
    }, 500);

    return () => {
      clearInterval(timer)
    };
  }, []);
  

  return(
    <>
      <div style={{marginLeft: 220, marginTop: 50}}>
      <CircularProgress variant="determinate" value={level} />  

      </div>
      
    </>
  )
}

Chart.register(ChartDataLabels);

function Grafico(){
  return(
    <Bar data={scrapOverallData} height={50} width={50} options={options} />
  )
}

const scrapOverallData = {
  labels: ['Geral', 'BE', 'CAR', 'FE', 'HP', 'MRB', 'CFC', 'DEC'],
  datasets: [
    {
      label: '%',
      type: 'line',
      data: [0.8, 0.25, 0.24, 0.21, 0.09, 0.01, 0, 0],
      borderWidth: 1,
      borderColor: 'red',
      stack: 'combined',
      datalabels: {
        align: 'right',
        anchor: 'end',
        color: 'red',

      }
    },
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
        anchor: '   end',
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

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(response => {
      setPost(Grafico)
    })
  }, []) 

  return(
    <>
      {post ? post : <Spinner />}
    </>
  )
}