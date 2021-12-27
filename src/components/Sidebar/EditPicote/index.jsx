import React, { useState, useEffect } from 'react'
import { Background, Container, TableName, Form, Label, Input, InputS, Select, Button } from './style'
import './style.css'
import PersistentDrawerLeft from '..'
import axios from '../../../services/api'
import moment from 'moment'
import 'moment/locale/pt-br'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

export default function EditPct() {
    const [isSucess, setIsSucess] = useState();
    const [partnumber, setPartnumber] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [linha, setLinha] = useState('');
    const [datePicote, setDatePicote] = useState(moment().format('YYYY-MM-DD').toString());
    const [turno, setTurno] = useState(0);
    const [cia, setCia] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('dmr/manaus').then((response) => {
            setData(response.data);
            console.log(response.data);
        });
    }, []);

    
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(partnumber, quantidade, linha, datePicote, turno, cia);
        try {
            const res = await axios.post('/excessao', {
                partnumber,
                quantidade,
                linha,
                CIA:cia,
                turno,
                datePicote
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
            <PersistentDrawerLeft />
            <Background>
                <Container>
                    <TableName>Editar Informações</TableName>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <Label className='cadpct_pn'>Part Number</Label>
                            <Input className='cadpct_input_1' required placeholder='Part Number' value={partnumber} onChange={(e) => setPartnumber(e.target.value)} />
                        </div>
                        <div>
                            <Label className='cadpct_qtd'>Quantidade</Label>
                            <Input className='cadpct_input_2' required type="number" placeholder='Quantidade' value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                        </div>
                        <div>
                            <Label className='cadpct_linha'>Linha</Label>
                            <InputS className='cadpct_input_3' required placeholder='Linha' value={linha} onChange={(e) => setLinha(e.target.value)} />
                        </div>
                        <div>
                            <Label className='cadpct_cia'>Cia.</Label>
                            <Select className='cadpct_input_6' onChange={(e) => setCia(e.target.value)}>
                                {data.map((value) => (
                                    <option value={value.CIA} key={value.CIA}>
                                        {value.CIA}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <Label className='cadpct_data'>Data</Label>
                            <InputS className='cadpct_input_4' required type="date" value={datePicote} onChange={(e) => setDatePicote(e.target.value)} />

                            <Label className='cadpct_turno'>Turno</Label>
                            <Select className='cadpct_input_5' value={turno} onChange={(e)=> setTurno(e.target.value)}>
                                <option disabled>Turno: </option>
                                <option value="1">1º turno</option>
                                <option value="2">2º turno</option>
                                <option value="3">3º turno</option>
                            </Select>
                        </div>                        
                        <Button>SALVAR</Button>
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