import { applyMiddleware, compose, createStore } from 'redux';
import { loadState, saveState } from './localStorage';

import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import throttle from 'lodash.throttle';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history = {}) {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
      )
    )
  );

  store.subscribe(throttle(() => saveState({
    // Map persisted state here
  }), 1000));

  return store;
}
