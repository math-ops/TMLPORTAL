import * as React from 'react'
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
      <div style={{marginLeft: 220, marginTop: -10}}>
      <CircularProgress variant="determinate" value={level} />  

      </div>
      
    </>
  )
}