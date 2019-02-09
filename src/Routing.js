import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';

export default () => (
  <Switch>
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);
