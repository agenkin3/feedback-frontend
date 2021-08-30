import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import studentReducer from './reducers/studentReducer'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;

let store = createStore(studentReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
  <Router>
  <App/>
  </Router>
  </Provider>
,
 document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//set up store

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );