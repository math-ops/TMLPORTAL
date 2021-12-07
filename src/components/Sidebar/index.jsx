import * as React from 'react';
import { Label, Input, Select, Option, Button, Download, Search, Line } from '../Dashboard/style'
import search from '../../styles/img/search.svg'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TableViewIcon from '@mui/icons-material/TableView';
import CreateIcon from '@mui/icons-material/Create';
import WindowIcon from '@mui/icons-material/Window';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionActions from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiltroContext } from '../../provider/filtros';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
moment.locale('pt-br');

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {

    const history = useHistory();
 
  const menuItems = [
    {
      text: 'Menu',
      icon: <WindowIcon />,
      path: '/'
    },
  ]

  const cadastros = [
      {
        text: 'Cadastro',
        icon: <CreateIcon />,
        path: '/cad'
      },
      {
          text: 'Cadastro DMR',
          icon: <CreateIcon />,
          path: '/cdmr'
      },
  ]

  const visualizarCadastros = [
     {
      text: 'Visualizar',
      icon: <TableViewIcon />,
      path: '/view'
    },
    {
      text: 'View DMR',
      icon: <TableViewIcon />,
      path: '/vdmr'
    }
  ]

  const { cia, 
          setCia, 
          dataInicio, 
          setDataInicio,
          dataFim,
          setDataFim,
          resultado,
          setResultado,
          isSearch,
          setIsSearch
        } = React.useContext(FiltroContext);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function formatDataCalendar(data) {
    return moment(data).add(1, 'days').format('YYYY-MM-DD').toString();
  }



  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            TML Overview
          </Typography>

          <Line>
        <Label>Cia.:</Label>
       <Select value={cia} onChange={(e)=> setCia(e.target.value)}>
          <Option value="manaus">Manaus</Option>
          <Option value="066">066</Option>
          <Option value="338">338</Option>
       </Select>

       <Label>Area:</Label>
       <Select value={cia} onChange={(e)=> setCia(e.target.value)}>
          <Option value="#">Area</Option>
          <Option value="#">value_01</Option>
          <Option value="#">value_02</Option>
       </Select>

        <Label>Data Inicio:</Label>
        <Input type="date" value={dataInicio} onChange={(e)=> setDataInicio(formatDataCalendar(e.target.valueAsDate))}/>

       <Label>Data Final:</Label>
        <Input type="date"  value={dataFim} onChange={(e)=> setDataFim(formatDataCalendar(e.target.valueAsDate))}/>

        <Label>Resultado:</Label>
        <Select value={resultado} onChange={(e)=> setResultado(e.target.value)}>
          <Option value="ALL">ALL</Option>
          <Option value="1">RTV</Option>
          <Option value="2">UAI</Option>
          <Option value="3">REW</Option>
          <Option value="4">SCRP</Option>
          <Option value="5">HLD</Option>
          <Option value="6">Cancelada</Option>
          <Option value="7">E-SCRP</Option>
          <Option value="8">RTC</Option>
          <Option value="9">MRB</Option>
          <Option value="4,7">SCRP/E-SCRP</Option>
        </Select>
        </Line> 
        <Line>   
         <Button onClick={(e) => setIsSearch(!isSearch)}><Search src={search} /></Button>
          </Line>
          
          <Download><CloudDownloadIcon /></Download>
        
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
          <List>
            {menuItems.map(item => (
               <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">CADASTROS</AccordionSummary>
              <AccordionActions>
                <List>
                {cadastros.map(cadastros => (
                  <ListItem
                  button
                  key={cadastros.text}
                  onClick={() => history.push(cadastros.path)}
                >
                  <ListItemIcon>{cadastros.icon}</ListItemIcon>
                <ListItemText primary={cadastros.text} />
              </ListItem>
                ))}
                </List>
              </AccordionActions>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">VIEWS</AccordionSummary>
              <AccordionActions>
                <List>
                {visualizarCadastros.map(visualizarCadastros => (
                  <ListItem
                  button
                  key={visualizarCadastros.text}
                  onClick={() => history.push(visualizarCadastros.path)}
                >
                  <ListItemIcon>{visualizarCadastros.icon}</ListItemIcon>
                <ListItemText primary={visualizarCadastros.text} />
              </ListItem>
                ))}
                </List>
              </AccordionActions>
            </Accordion>
          </List>
              
      </Drawer>
    </Box>
  );
}

