import './style.css'
import { Background, Container, Form, Input, Label, Button } from './style'
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
                  <Input className="campo_tres" placeholder="Cia."/>
              </div>
                <Button>Salvar</Button>
          </Form>
        </Container>
      </Background>
    </>
  )
}