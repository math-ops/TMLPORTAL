import './style.css'
import { Background, Container, TableName, Campo, Input, SButton, NButton } from './style'
import PersistentDrawerLeft from '..';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
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
  { id: 'num_dmr', label: 'Nº DMR', minWidth: 190 },
  { id: 'cia', label: 'Companhia', minWidth: 190 },
  { id: 'flag', label: 'Flag', minWidth: 190 },
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

function createData(num_dmr, cia, flag) {
  
  return { num_dmr, cia, flag };
}

const rows = [
  createData('00000','CIA_00', 'Inserir'),
  createData('00000','CIA_01', 'Inserir'),
  createData('00000','CIA_02', 'Inserir'),
  createData('00000','CIA_03', 'Excluir'),
  createData('00000','CIA_04', 'Excluir'),
  createData('00000','CIA_05', 'Excluir'),
  createData('00000','CIA_06', 'Excluir'),
];

export function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const deleteButton = (
    <IconButton aria-label="delete" onClick={handleOpen}>
      <DeleteIcon color="error" />
    </IconButton>
  )

  return (
    <>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Deletar DMR</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja remover as informações selecionadas?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button color="error" onClick={handleClose}>Remover</Button>
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
                    <StyledTableCell align="left">{row.num_dmr}</StyledTableCell>
                    <StyledTableCell align="left">{row.cia}</StyledTableCell>
                    <StyledTableCell align="left">{row.flag}</StyledTableCell>
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


export default function ViewDMR() {
  return (
    <>
      <PersistentDrawerLeft />
      <Background>
      <Container>
        <TableName>DMR Cadastrados</TableName>
        <div>
          <Link to="/cdmr">
            <NButton>Novo Cadastro +</NButton>
          </Link>
        </div>
        <div>
          <Input className="dmr_campo_linha" placeholder="Nº DMR" />
        </div>
        <div>
          <Campo className="dmr_campo_area">
            <option>Cia.:</option>
            <option>Value_01</option>
            <option>Value_02</option>
          </Campo>
        </div>
        <div>
          <Campo className="dmr_campo_cia">
            <option>Flag</option>
            <option>Value_01</option>
            <option>Value_02</option>
          </Campo>
        </div>
        <SButton>Pesquisar</SButton>
        <div className='dmr_table_view'>
        <StickyHeadTable />
        </div>
      </Container>
      </Background>
    </>
  )
}