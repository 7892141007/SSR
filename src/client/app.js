import "babel-polyfill";
import React from 'react';
import ReactDOm from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import reducers from './reducers/index';
import userSaga from './sagas/index';

console.log('Client side APP loaded!');

const clientStore = createStore(reducers, {}, applyMiddleware(thunk));
window.store = clientStore;

ReactDOm.hydrate(
    <Provider store={clientStore}>
      <BrowserRouter>
        <Routes />
       </BrowserRouter>
    </Provider>,
document.querySelector('#root'));