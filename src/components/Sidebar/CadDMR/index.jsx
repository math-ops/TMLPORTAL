import { Background, Container, Form, Input, Label, Select, Button } from './style'
import './style.css'
// import React, { useState } from 'react'
import PersistentDrawerLeft from '../'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import axios from 'axios'
// import Snackbar from '@mui/material/Snackbar'
// import MuiAlert from '@mui/material/Alert'
// import api from '../../../services/api'

export default function CadDMR() {
    // const [isSucess, setIsSucess] = useState();
    // const [dmr, setDmr] = useState({
    //     id: '',
    //     num_dmr: '',
    //     cia: '',
    //     flag: '',
    // });

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post(api, dmr);
    //         if (!!res.data) {
    //             setIsSucess(true);
    //         } else {
    //             setIsSucess(false);
    //         }
    //     } catch {
    //         setIsSucess(false);
    //         console.log('error catch');
    //     } finally {
    //         handleClick();
    //     }
    // }

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setDmr(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    //     console.log(dmr);
    // }

    // const Alert = React.forwardRef(function Alert(props, ref) {
    //     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    // })

    // const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true)
    // }

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpen(false);
    // }


    return (
        <>
            <PersistentDrawerLeft />
            <Background>
            <Box sx={{ width: '50%', height: 0, marginTop: '8%', marginLeft: '38%'}}>
            <Typography variant="h3" component="div" gutterBottom > Cadastro de DMR</Typography>
            </Box>
                <Container>
                    <Form>
                        <div>
                            <Label className="ndmr_label_um">Nº DMR</Label>
                            <Input className="ndmr_campo_um" placeholder="Nº DMR" />
                        </div>
                        <div>
                            <Label className="ndmr_label_dois">Cia.</Label>
                            <Select className="campo_dois">
                                <option value="manaus" >Manaus</option>
                                <option value="066" >066</option>
                                <option value="338" >338</option>
                            </Select>
                        </div>
                        <FormLabel className="ndmr_label_tres" component="legend">Flag</FormLabel>
                        <RadioGroup row aria-label="flag" name="row-radio-buttons-group" className="here">
                            <FormControlLabel className="radio" value="Inserir" control={<Radio />} label="Inserir" />
                            <FormControlLabel className="radio" value="Excluir" control={<Radio />} label="Excluir" />
                        </RadioGroup>
                        <Button>SALVAR</Button>
                        {/* {isSucess ?
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Cadastrado com Sucesso!
                                </Alert>
                            </Snackbar>
                            :
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    Não Foi Possivel Fazer o Cadastro!
                                </Alert>
                            </Snackbar>
                        } */}
                    </Form>
                </Container>
            </Background>
        </>
    )
}