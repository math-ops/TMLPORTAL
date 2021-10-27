import React from 'react'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels);

//definindo os gráficos

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

const scrapOverallData = {
  labels: ['Geral', 'BE', 'CAR', 'FE', 'HP', 'MRB', 'CFC', 'DEC'],
  datasets: [
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
    {
      label: '%',
      data: [0.8, 0.25, 0.24, 0.21, 0.09, 0.01, 0, 0],
      borderWidth: 0,
      stack: 'combined',
      datalabels: {
        align: 'right',
        anchor: 'end',
        color: 'red',

      }
    }
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
      stacked: 'combined',
      borderColor: 'rgba(0, 0, 0, 0.7)',
      datalabels: {
        align: 'end',
        anchor: 'start',
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
    {
      label: '%',
      data: [0.11, 0.39, 0.25],
      borderWidth: 0,
      stacked: 'combined',
      datalabels: {
        align: 'end',
        anchor: 'start',
        color: 'red',
      }

    }
  ],
}

const scrapModelData = {
  labels: ['CAPRIPLUS', 'JAVA', 'MALTA', 'HP', 'HANOIPLUS', 'FUJI SC', 'MALTA LITE', 'ARUBA', 'HANOI', 'CAPRI ROW'],
  datasets: [
    {
      label: 'Value',
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
      ],
      datalabels: {
        align: 'end',
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

const ofensorClassData = {
  labels: ['M. SOLDA', 'H. FORNECEDOR', 'CURTO E SOLDA', 'COBRE EXPOSTO', 'EXCS DE REPARO', 'CONECTOR DANIFICADO', 'PROC COM CURTO', 'EXCS RETRABALHO', 'INSF DE SOLDA', 'ERRO DE REPARO'],
  datasets: [
    {
      label: 'OFENSSOR',
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
      ],
      datalabels: {
        align: 'end',
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
    }
  ]
}

//configurações de exibição dos gráficos
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

const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
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

const stackedX = {
  indexAxis: 'x',
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        display: false,
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
      beginAtZero: true,
      ticks: {
        display: false,
      },
      stacked: true
    },
  }
}

const trends = {
  maintainAspectRatio: false,
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
      <Line data={trendWeekData} height={50} width={50} options={trends}/>
    </>
  )
}

export function ChartScrapModel(){
  return(
    <>
      <Bar data={scrapModelData} height={40} width={40} options={stackedX}/>
    </>
  )
}

export function ChartOfensorClassification(){
  return(
    <>
      <Bar data={ofensorClassData} height={20} width={40} options={stackedY}/>
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