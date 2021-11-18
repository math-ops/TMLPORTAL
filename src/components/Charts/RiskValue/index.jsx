import React, {useEffect, useState} from 'react'
import Spinner from '../../Spinner/Spinner'
//import CircularProgress from '@mui/material/CircularProgress'
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

function Grafico(){
  return (
    <Doughnut data={riskValueData} height={50} width={50} options={geral}/>
  )
}

export function ChartRiskValue(){



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
      {post ?  post : <Spinner />}      
    </>
  )
}