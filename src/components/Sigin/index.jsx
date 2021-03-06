import React, { useState } from 'react'
import axios from 'axios'
import { Container, Logo, Form } from './style'
import './style.css'
import logo from '../../styles/img/blue.png'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'



export default function Sigin(){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isSucess, setIsSucess] = useState(true);
  
  const handleUser = e => {
    const usuario = e.target.value;
    setUser(usuario);
    console.log('handleusuario');
  }

  const handlePassword = e => {
    const senha = e.target.value;
    setPassword(senha);
    console.log('handlesenha');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('authenticate', {
      userText:user,
      passwordText:password,
    })
    if(!!res.data){
    
      setIsSucess(true);
    }else{
      setIsSucess(false);
    }
  } catch{
    setIsSucess(false);
    console.log('error catch');
  } finally {
    handleOpen();
  }
}

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  } 

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <>
            <Container>
                <Logo src={logo} alt="flex"/>
                <Form className='login-form'>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '310px' },}} noValidate autoComplete="off">
            <TextField required id="outlined-basic" label="Username" variant="outlined" value={user} onChange={handleUser} />
          </Box>      
            <FormControl sx={{ m: 1, width: '310px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '310px' },}} noValidate autoComplete="off">    
              <Button sx={{m: 1, widht: '300px'}} variant="contained" type="submit" onClick={handleSubmit}>Login</Button>
            </Box>
            { isSucess ?
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Cadastrado com Sucesso!
                </Alert>
              </Snackbar>
              :
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Usu??rio/Senha Inv??lido!
                </Alert>
              </Snackbar>
            }
                </Form>
            </Container>
        </>
    )
}



           
      