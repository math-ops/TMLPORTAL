import { Background, Container, Form, Label, Input, InputS, Select, Button } from './style'
import './style.css'
import PersistentDrawerLeft from '..'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function CadPct(){
    return(
        <>
          <PersistentDrawerLeft />
          <Background>
              <Box sx={{ width: '50%', height: 0, marginTop: '8%', marginLeft: '38%'}}>
                  <Typography variant="h3" component="div" gutterBottom >Cadastro de Picote</Typography>
              </Box>
              <Container>
                  <Form>
                      <div>
                          <Label className='cadpct_pn'>Part Number</Label>
                          <Input className='cadpct_input_1' />
                      </div>
                      
                      <div>
                          <Label className='cadpct_qtd'>Quantidade</Label>
                          <Input className='cadpct_input_2' type="number"/>
                      </div>
                      
                      <div>                          
                          <Label className='cadpct_linha'>Linha</Label>
                          <Input className='cadpct_input_3' />
                      </div>

                      
                      <div>
                        <Label className='cadpct_data'>Data</Label>
                          <InputS className='cadpct_input_4' type="date" />
                      
                          <Label className='cadpct_turno'>Turno</Label>
                          <Select className='cadpct_input_5'>
                              <option>1º turno</option>
                              <option>2º turno</option>
                              <option>3º turno</option>
                          </Select>
                      </div>
                        <Button>SALVAR</Button>
                  </Form>
              </Container>
          </Background>
        </>
    )
}