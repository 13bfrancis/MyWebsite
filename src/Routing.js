import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

const Testing = () => <h1>Hello World</h1>;

export default () => (
  <Switch>
    <Route path="/projects" component={Testing} />
    <Route path="/resume" component={HomePage} />
    <Route path="/contact" component={HomePage} />
    <Route path="/about" component={HomePage} />
    <Route component={HomePage} />
  </Switch>
);
