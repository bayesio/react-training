import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './combinedReducers';
import Layout from './shared/_Layout';
import Index from './Index/Index.presenter';
import About from './About/About.presenter';
import HeroList from './Hero/List/List.container'
import HeroEdit from './Hero/Edit/Edit.container';

const store = createStore(reducers, applyMiddleware(thunk));
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path="about" component={About} />
        <Route path="heroes" component={HeroList} />
        <Route path="hero/(:id)" component={HeroEdit} />
      </Route>
    </Router>
  </Provider>,
  app);