import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import { Route, Router, browserHistory } from "react-router";
import App from './components/app';
import reducers from './reducers';
import PostJob from "./components/PostJob";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/post" component={ PostJob } />
    </Router>
  </Provider>
  , document.querySelector('.container'));
