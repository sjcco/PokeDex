import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import Home from '../Home/Home';
import Pokemon from '../Pokemon/Pokemon';
import { container } from './App.css';

const App = () => (
  <BrowserRouter>
    <div className={container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:name" component={Pokemon} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
