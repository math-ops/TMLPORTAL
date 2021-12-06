import './style.css'
import { Background, Container, Form, Input, Label, Button, Select } from './style'
import PersistentDrawerLeft from '../'

export default function Cadastro(){
  return(
    <>
      <Background>
      <PersistentDrawerLeft />
        <Container>
          <Form>
              <div >
                <Label className="label_um">Linha</Label>
                  <Input className="campo_um" placeholder="Linha"/>
              </div>
              <div >
                <Label className="label_dois">Area</Label>
                  <Input className="campo_dois" placeholder="Area"/>
              </div>
              <div >
                <Label className="label_tres">Cia</Label>
                  <Select className="campo_tres">
                    <option value="manaus" >Manaus</option>
                    <option value="066" >066</option>
                    <option value="338" >338</option>
                    </Select>
              </div>
                <Button>Salvar</Button>
          </Form>
        </Container>
      </Background>
    </>
  )
}