import React, { useState, useEffect } from 'react';
import './style.css';
import { Background, Container, TableName, Form, Input, Label, Button, Select } from './style';
import PersistentDrawerLeft from '../';
import axios from '../../../services/api';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';

export default function CadArea() {

  const history = useHistory();

  const [isSucess, setIsSucess] = useState();
  const [linha, setLinha] = useState('');
  const [area, setArea] = useState('');
  const [cia, setCia] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('dmr/manaus').then((response) => {
      setData(response.data);
      setCia(response.data[0].CIA);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('/area', {
        line: linha,
        area,
        cia
      });
      if (!!res.data) {
        setIsSucess(true);
        return history.push('/view/area');
      } else {
        setIsSucess(false);
      }
    } catch {
      setIsSucess(false);
      console.log('error catch');
    } finally {
      handleClick();
    }
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return ;
    }
    setOpen(false);
  }


  return (
    <>
      <Background>
        <PersistentDrawerLeft />

        <Container>
          <TableName>Cadastro de Área</TableName>
          <Form onSubmit={handleSubmit}>
            <div >
              <Label className="label_um">Linha</Label>
              <Input className="campo_um" placeholder="Linha" required value={linha} onChange={(e) => setLinha(e.target.value)} />
            </div>
            <div >
              <Label className="label_dois">Area</Label>
              <Input className="campo_dois" placeholder="Area" required value={area} onChange={(e) => setArea(e.target.value)} />
            </div>
            <div >
              <Label className="label_tres">Cia</Label>
              <Select className="campo_tres" onChange={(e) => setCia(e.target.value)}>
                {data.map((value) => (
                            <option value={value.CIA} key={value.CIA}>
                                {value.CIA}
                            </option>
                        ))}
              </Select>
            </div>
            <Button>Salvar</Button>
            {isSucess ?
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Cadastrado com Sucesso!
                </Alert>
              </Snackbar>
           
              :
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Não Foi Possivel Fazer o Cadastro!
                </Alert>
              </Snackbar>
            }
          </Form>
        </Container>
      </Background>
    </>
  )
}