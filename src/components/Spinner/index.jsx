import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

export default function Spinner() {

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
      <Stack alignItems="center" >
        <CircularProgress variant="determinate" value={level} />
      </Stack>
    </>
  )
}