import * as React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import About from './features/about';
import Heroes from './features/hero/heroes';
import HeroForm from './features/hero/heroForm';
import Index from './features/index';
import Layout from './features/shared/layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index} />
    <Route path="about" component={About} />
    <Route path="heroes" component={Heroes} />
    <Route path="hero/(:id)" component={HeroForm} />
  </Route>
);
