import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from '../client/reducers/index';
import userSaga from "../client/sagas";


export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(userSaga);

    return store;
};