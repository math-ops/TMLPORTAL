import { Background, Container, Form, Input, Label, Select, Button } from './style'
import './style.css'
import PersistentDrawerLeft from '../'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

export default function CadDMR() {
    return (
        <>
            <PersistentDrawerLeft />
            <Background>
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
                            <FormControlLabel value="Inserir" control={<Radio />} label="Inserir" />
                            <FormControlLabel value="Excluir" control={<Radio />} label="Excluir" />
                        </RadioGroup>
                        <Button>SALVAR</Button>
                    </Form>
                </Container>
            </Background>
        </>
    )
}