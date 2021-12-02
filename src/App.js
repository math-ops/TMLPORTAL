import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import GlobalStyle from './styles/global'
import Cadastro from './components/Sidebar/CadScrapOverall'
import CadDMR from './components/Sidebar/CadDMR';
import ViewDMR from './components/Sidebar/ViewDMR';
import ViewCad from './components/Sidebar/ViewCadastro'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cad" exact component={Cadastro} />
          <Route path="/view" exact component={ViewCad} />
          <Route path="/cdmr" exact component={CadDMR} />
          <Route path="/vdmr" exact component={ViewDMR} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
