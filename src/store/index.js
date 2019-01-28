/* eslint-disable no-undef */

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './sagas/';

const storeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
    : compose;
const initialiseSagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, storeEnhancers(applyMiddleware(initialiseSagaMiddleware)));
const store = createStore(rootReducer, compose(applyMiddleware(initialiseSagaMiddleware)));
initialiseSagaMiddleware.run(watcherSaga);

export default store;
