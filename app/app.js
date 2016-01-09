import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncHistory } from 'redux-simple-router';
import reducers from './reducers';
import AppContainer from './containers/AppContainer';
require('./styles/styles.scss');

const history = createHistory();
const store = createStore(reducers);

syncHistory(history)(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
