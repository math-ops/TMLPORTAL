import PersistentDrawerLeft from '..'
import { Background, Container, TableName, Campo, SButton, NButton } from './style'
import './style.css'

import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from '../../../services/api';


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


export function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [linha, setLinha] = useState('');
  const [area, setArea] = useState('');
  const [cia, setCia] = useState('');

  useEffect(() => {

    (async () => {

      const [
        req_area
      ] = await Promise.all([axios.get('/area')]);

      setData(req_area.data);

    })();
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  }

  const  handleDelete = () => {
    (async () => {
      await axios.delete(`area/${id}`);
    })();    
    setOpen(false);
  }

  const  handleClose = () => {  
    setOpen(false);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editButton = (
    <IconButton aria-label="edit">
      <EditIcon color="warning" />
    </IconButton>
  )
  const deleteButton = (
    <IconButton aria-label="delete" onClick={handleOpen}>
      <DeleteIcon color="error" />
    </IconButton>
  )

  return (

    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Deletar Area</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`
           Deseja remover as informações selecionadas:
           Linha: ${linha}
           Area: ${area},
           Cia: ${cia}?`
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button color="error" onClick={handleDelete}>Remover</Button>
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
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <>
                      <TableRow onClick={(e) => {
                        setId(row.id);
                        setLinha(row.line);
                        setArea(row.area);
                        setCia(row.cia);
                      }} hover role="checkbox" tabIndex={-1} key={row.id}>
                        <StyledTableCell align="left">{row.line}</StyledTableCell>
                        <StyledTableCell align="left">{row.area}</StyledTableCell>
                        <StyledTableCell align="left">{row.cia}</StyledTableCell>
                        <StyledTableCell align="center"><Link to={`/area/${row.id}`}>{editButton}</Link></StyledTableCell>
                        <StyledTableCell align="center">{deleteButton}</StyledTableCell>
                      </TableRow >
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default function ViewArea() {
  return (
    <>
      <PersistentDrawerLeft />
      <Background>
        <Container>
          <TableName>Áreas Cadastradas</TableName>
          <div>
            <Link to="/cad/area">
              <NButton>Novo Cadastro +</NButton>
            </Link>
          </div>
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
          <div className="table_view">
            <StickyHeadTable />
          </div>
        </Container>
      </Background>
    </>
  )
}