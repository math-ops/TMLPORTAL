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
                <Label className="label_um">Campo 01</Label>
                  <Input className="campo_um" placeholder="Campo 01"/>
              </div>
              <div >
                <Label className="label_dois">Campo 02</Label>
                  <Input className="campo_dois" placeholder="Campo 02"/>
              </div>
                <Button>Salvar</Button>
          </Form>
        </Container>
      </Background>
    </>
  )
}