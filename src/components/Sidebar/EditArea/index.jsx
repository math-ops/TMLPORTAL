import React, { useState, useEffect } from 'react';
import './style.css';
import { Background, Container, TableName, Form, Input, Label, Button, Select, Cancel } from './style';
import PersistentDrawerLeft from '../';
import { Link } from 'react-router-dom'
import axios from '../../../services/api';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useParams } from 'react-router';

export default function EditArea() {

  const [isSucess, setIsSucess] = useState();
  const [linha, setLinha] = useState('');
  const [area, setArea] = useState('');
  const [cia, setCia] = useState('');
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    (async () => {

      const [
        req_cias,
        req_area
      ] = await Promise.all([
        axios.get('dmr/manaus'),
        axios.get(`area/${id}`)
      ]);

      setData(req_cias.data);
      setLinha(req_area.data.line);
      setArea(req_area.data.area);
      setCia(req_area.data.cia);

      console.log(req_area.data);

    })();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.put('area', {
        id:id,
        line: linha,
        area,
        cia
      });
      if (!!res.data) {
        setIsSucess(true);
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
      return;
    }
    setOpen(false);
  }


  return (
    <>
      <Background>
        <PersistentDrawerLeft />

        <Container>
          <TableName>Editar Informações</TableName>
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
              <Select value={cia} className="campo_tres" onChange={(e) => setCia(e.target.value)}>
                {data.map((value) => (
                  <option value={value.CIA} key={value.CIA}>
                    {value.CIA}
                  </option>
                ))}
              </Select>
            </div>
            <Link to='/view/area'>
                  <Cancel>Cancelar</Cancel>
             </Link> 
            <Button>Salvar</Button>
            {isSucess ?
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Cadastrado com Sucesso!
                </Alert>
              </Snackbar>
              :
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
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