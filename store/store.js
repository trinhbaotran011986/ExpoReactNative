import { legacy_createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReducer } from '../utils/injector/reducerInjectors';

export default function configureStore(initialState = {}) {
  const composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middlewares = [sagaMiddleware];

  const enhancers = [composeWithDevTools(applyMiddleware(...middlewares))];

  const store = legacy_createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  return store;
}
