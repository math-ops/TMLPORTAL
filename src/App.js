import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import GlobalStyle from './styles/global'
import Cadastro from './components/Sidebar/CadScrapOverall'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cad" exact component={Cadastro} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
