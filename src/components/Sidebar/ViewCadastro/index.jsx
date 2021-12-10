import PersistentDrawerLeft from '../'
import { Background, Container, TableName, Campo, SButton } from './style'
import './style.css'

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#009add',
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    background: '#fff',
  },
}))(TableCell);

const columns = [
  { id: 'linha', label: 'Linha', minWidth: 170 },
  { id: 'area', label: 'Área', minWidth: 170 },
  { id: 'cia', label: 'Companhia', minWidth: 170 },
  { id: 'edit', label: 'Editar', minWidth: 70 },
  { id: 'remove', label: 'Remover', minWidth: 50 },
];

const useStyles = makeStyles({
  root: {
    width: '95%',
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  container: {
    maxHeight: 440,
  },
});

function createData(linha, area, cia) {

  return { linha, area, cia };
}

const rows = [
  createData('LINHA_1', 'AREA_A', 'Manaus'),
  createData('LINHA_2', 'AREA_B', 'Manaus'),
  createData('LINHA_3', 'AREA_C', '066'),
  createData('LINHA_4', 'AREA_D', '066'),
  createData('LINHA_5', 'AREA_E', '338'),
  createData('LINHA_6', 'AREA_F', '338'),
];

export function StickyHeadTable() { 
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [remove, setRemove] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleEditOpen = () => {
    setOpen(true);
  }

  const handleEditClose = () => {
    setOpen(false);
  }

  const handleRemoveOpen = () => {
    setRemove(true);
  }

  const handleRemoveClose = () => {
    setRemove(false);
  }

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

const editButton = (
  <IconButton aria-label="edit" onClick={handleEditOpen}>
    <EditIcon color="warning" />
  </IconButton>
)
const deleteButton = (
  <IconButton aria-label="delete" onClick={handleRemoveOpen}>
    <DeleteIcon color="error" />
  </IconButton>
)

return (
  <>
    <Dialog open={open} onClose={handleEditClose}>
      <DialogTitle>Editar Informações</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Preencha os campos abaixo para efetuar a edição das informações:
        </DialogContentText>
        <TextField autoFocus margin="dense" id="linha" label="Linha" type="text" fullWidth variant="standard"/>
        <TextField margin="dense" id="area" label="Área" type="text" fullWidth variant="standard"/>
        <TextField margin="dense" id="cia" label="Compania" type="text" fullWidth variant="standard"/>          
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEditClose}>Cancelar</Button>
        <Button color="warning" onClick={handleEditClose}>Salvar</Button>
      </DialogActions>
    </Dialog>

    <Dialog open={remove} onClose={handleRemoveClose}>
      <DialogTitle>Deletar Informações</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deseja deletar as informações selecionadas?
        </DialogContentText>       
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRemoveClose}>Cancelar</Button>
        <Button color="error" onClick={handleRemoveClose}>Remover</Button>
      </DialogActions>
    </Dialog>

    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <>
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      <StyledTableCell align="left">{row.linha}</StyledTableCell>
                      <StyledTableCell align="left">{row.area}</StyledTableCell>
                      <StyledTableCell align="left">{row.cia}</StyledTableCell>
                      <StyledTableCell align="center">{editButton}</StyledTableCell>
                      <StyledTableCell align="center">{deleteButton}</StyledTableCell>
                    </TableRow>
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </>
  );
}

export default function ViewCad() {
  return (
    <>
      <PersistentDrawerLeft />
    <Background>
      <Container>
        <TableName>Cadastros realizados</TableName>
        <div>
          <Campo className="campo_linha">
            <option>Linha:</option>
            <option>value_01</option>
            <option>value_02</option>
          </Campo>
        </div>
        <div>
          <Campo className="campo_area">
            <option>Area:</option>
            <option>value_01</option>
            <option>value_02</option>
          </Campo>
        </div>
        <div>
          <Campo className="campo_cia">
            <option>Cia.:</option>
            <option>value_01</option>
            <option>value_02</option>
          </Campo>
        </div>
        <SButton>Pesquisar</SButton>
        <StickyHeadTable />
      </Container>
      </Background>
    </>
  )
}