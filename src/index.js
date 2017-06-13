import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import { Route, Router, browserHistory } from "react-router";
import App from './components/app';
import reducers from './reducers';
import PostJob from "./components/PostJob";
import Login from "./components/Login";
import Register from "./components/Register";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/post" component={ PostJob } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
    </Router>
  </Provider>
  , document.querySelector('.container'));
