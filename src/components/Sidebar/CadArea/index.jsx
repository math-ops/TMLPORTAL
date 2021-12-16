import './style.css'
import { Background, Container, TableName, Form, Input, Label, Button, Select } from './style'
import PersistentDrawerLeft from '../'

export default function CadArea() {
  // const [isSucess, setIsSucess] = useState();
  // const [area, setArea] = useState({
  //   id: '',
  //   linha: '',
  //   area: '',
  //   cia: '',
  // });

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(api, area);
  //     if (!!res.data) {
  //       setIsSucess(true);
  //     } else {
  //       setIsSucess(false);
  //     }
  //   } catch {
  //     setIsSucess(false);
  //     console.log('error catch');
  //   } finally {
  //     handleClick();
  //   }
  // }

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setArea(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  //   console.log(area);
  // }

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // })

  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true)
  // }

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  // }


  return (
    <>
      <Background>
        <PersistentDrawerLeft />
       
        <Container>
          <TableName>Cadastro de Área</TableName>
          <Form>
            <div >
              <Label className="label_um">Linha</Label>
              <Input className="campo_um" placeholder="Linha" />
            </div>
            <div >
              <Label className="label_dois">Area</Label>
              <Input className="campo_dois" placeholder="Area" />
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