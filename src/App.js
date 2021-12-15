import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import GlobalStyle from './styles/global'
import CadArea from './components/Sidebar/CadArea'
import CadDMR from './components/Sidebar/CadDMR';
import CadPct from './components/Sidebar/CadPicote'
import ViewDMR from './components/Sidebar/ViewDMR';
import ViewCad from './components/Sidebar/ViewCadastro'
import ViewPct from './components/Sidebar/ViewPicote'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cad" exact component={CadArea} />
          <Route path="/view" exact component={ViewCad} />
          <Route path="/cdmr" exact component={CadDMR} />
          <Route path="/vdmr" exact component={ViewDMR} />
          <Route path="/cpct" exact component={CadPct} />
          <Route path="/vpct" exact component={ViewPct} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
