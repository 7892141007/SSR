import "babel-polyfill";
import React from 'react';
import ReactDOm from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Axios from "axios";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import { renderRoutes } from "react-router-config";
import reducers from './reducers/index';

console.log('Client side APP loaded!');
const axiosInstance = Axios.create({
  baseURL: '/api'
});

const clientStore = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
window.store = clientStore;

ReactDOm.hydrate(
    <Provider store={clientStore}>
      <BrowserRouter>
      {/* <Routes /> */}
        <div>{renderRoutes(Routes)}</div>
       </BrowserRouter>
    </Provider>,
document.querySelector('#root'));