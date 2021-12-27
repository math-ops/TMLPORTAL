import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Sigin from './components/Sigin'
import Dashboard from './components/Dashboard';
import CadArea from './components/Sidebar/CadArea'
import CadDMR from './components/Sidebar/CadDMR';
import CadPct from './components/Sidebar/CadPicote'
import ViewDMR from './components/Sidebar/ViewDMR';
import ViewArea from './components/Sidebar/ViewArea'
import ViewPct from './components/Sidebar/ViewPicote'
import EditArea from './components/Sidebar/EditArea'
import EditPct from './components/Sidebar/EditPicote'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/sigin" exact component={Sigin} />
          <Route path="/" exact component={Dashboard} />
<<<<<<< HEAD
          <Route path="/cad/area" exact component={CadArea} />
          <Route path="/cad/dmr" exact component={CadDMR} />
          <Route path="/cad/picote" exact component={CadPct} />

          <Route path="/view/area" exact component={ViewArea} />
          <Route path="/view/dmr" exact component={ViewDMR} />
          <Route path="/view/picote" exact component={ViewPct} />
=======
          <Route path="/cad" exact component={CadArea} />
          <Route path="/view" exact component={ViewCad} />
          <Route path="/cdmr" exact component={CadDMR} />
          <Route path="/vdmr" exact component={ViewDMR} />
          <Route path="/cpct" exact component={CadPct} />
          <Route path="/vpct" exact component={ViewPct} />
          <Route path="/earea" exact component={EditArea} />
          <Route path="/epct" exact component={EditPct} />
>>>>>>> f2801327e90532799fc9897b2eef2be634dc0351
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
