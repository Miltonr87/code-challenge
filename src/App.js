import React from 'react';
import './App.css';
import { Switch, 
  Route, 
  NavLink, 
  Redirect } from 'react-router-dom';
import ViewList from './views/ViewList';
import ViewPage from './views/ViewPage';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search Bar</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={ViewList} />
        <Route path={"/view/:view"} exact component={ViewPage} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
