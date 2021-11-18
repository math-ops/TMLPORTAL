import * as React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

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
      <div style={{marginLeft: 220, marginTop: 20}}>
      <CircularProgress variant="determinate" value={level} />  

      </div>
      
    </>
  )
}

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

function Grafico(){
  return(
    <Bar data={trendWeekData} height={50} width={50} options={trends}/>
  )
}

export function ChartTrendWeek(){

  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
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
