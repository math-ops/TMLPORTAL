import { Background, Container, TableName, Form, Input, Label, Select, Button } from './style'
import './style.css'
import React, { useState, useEffect } from 'react'
import PersistentDrawerLeft from '../'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import axios from '../../../services/api'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'


export default function CadDMR() {
    const [isSucess, setIsSucess] = useState();
    const [dmr, setDmr] = useState('');
    const [cia, setCia] = useState('');
    const [type, setType] = useState(0);
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
            const res = await axios.post('/excessao', {
                dmr,
                CIA:cia,
                type
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
                    <TableName>Cadastro de DMR</TableName>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <Label className="ndmr_label_um">Nº DMR</Label>
                            <Input className="ndmr_campo_um" placeholder="Nº DMR" required value={dmr} onChange={(e) => { setDmr(e.target.value) }} />
                        </div>
                        <div>
                            <Label className="ndmr_label_dois">Cia.</Label>
                            <Select className="campo_dois" onChange={(e) => setCia(e.target.value)}>
                                {data.map((value) => (
                                    <option value={value.CIA} key={value.CIA}>
                                        {value.CIA}
                                    </option>
                                ))}
                            </Select>
                        </div> 
                        <FormLabel className="ndmr_label_tres" component="legend">Flag</FormLabel>
                        <RadioGroup row aria-label="flag" name="row-radio-buttons-group" className="here"  >
                            <FormControlLabel className="radio" checked={type === 0} value={type} control={<Radio />} label="Inserir" onChange={(e) => setType(0)}/>
                            <FormControlLabel className="radio" checked={type === 1} value={type} control={<Radio />} label="Excluir" onChange={(e) => setType(1)}/>
                        </RadioGroup>
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