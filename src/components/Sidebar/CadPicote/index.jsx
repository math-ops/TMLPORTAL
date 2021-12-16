import { Background, Container, TableName, Form, Label, Input, InputS, Select, Button } from './style'
import './style.css'
import PersistentDrawerLeft from '..'

export default function CadPct(){
    return(
        <>
          <PersistentDrawerLeft />
          <Background>
              <Container>
                  <TableName>Cadastro de Picote</TableName>
                  <Form>
                      <div>
                          <Label className='cadpct_pn'>Part Number</Label>
                          <Input className='cadpct_input_1' placeholder='Part Number' />
                      </div>                      
                      <div>
                          <Label className='cadpct_qtd'>Quantidade</Label>
                          <Input className='cadpct_input_2' type="number"placeholder='Quantidade' />
                      </div>                      
                      <div>                          
                          <Label className='cadpct_linha'>Linha</Label>
                          <Input className='cadpct_input_3' placeholder='Linha' />
                      </div>                      
                      <div>
                        <Label className='cadpct_data'>Data</Label>
                          <InputS className='cadpct_input_4' type="date" />
                                                
                          <Label className='cadpct_turno'>Turno</Label>
                          <Select className='cadpct_input_5'>
                              <option disabled>Turno: </option>
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