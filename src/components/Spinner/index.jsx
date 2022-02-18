import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export function SpinnerTw() {

  const [level, setLevel] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLevel((nextLevel) => nextLevel >= 100 ? 0 : nextLevel + 25);
    }, 500);

    return () => {
      clearInterval(timer)
    };
  }, [level]);



  return (
    <>
      <Box sx={{ m: 1, position: 'relative'}} >
        <CircularProgress 
        variant="determinate" 
        value={level}
        sx={{
          position: 'absolute',
          left: '45%',
          marginTop: '50px',
        }}
        />
      </Box>
    </>
  )
}

export function SpinnerSm() {

  const [level, setLevel] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLevel((nextLevel) => nextLevel >= 100 ? 0 : nextLevel + 25);
    }, 500);

    return () => {
      clearInterval(timer)
    };
  }, [level]);



  return (
    <>
      <Box sx={{ m: 1, position: 'relative'}} >
        <CircularProgress 
        variant="determinate" 
        value={level}
        sx={{
          position: 'absolute',
          left: '45%',
          marginTop: '-30px',
        }}
        />
      </Box>
    </>
  )
}

export function SpinnerBg() {

  const [level, setLevel] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLevel((nextLevel) => nextLevel >= 100 ? 0 : nextLevel + 25);
    }, 500);

    return () => {
      clearInterval(timer)
    };
  }, [level]);



  return (
    <>
      <Box sx={{ m: 1, position: 'relative'}} >
        <CircularProgress 
        variant="determinate" 
        value={level}
        sx={{
          position: 'absolute',
          left: '45%',
          marginTop: '110px',
        }}
        />
      </Box>
    </>
  )
}