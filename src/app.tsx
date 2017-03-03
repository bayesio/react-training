import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory as history, IndexRoute, Route, Router } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import routes from './routes';

const store = createStore(reducers);

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  app);
