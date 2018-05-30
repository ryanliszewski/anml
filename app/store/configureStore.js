import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import reducer from '../reducers/reducer';

export default function configureStore(){
  const simpleStore = createStore(
    reducer,
    {},
    applyMiddleware(logger)
  );

  return simpleStore;
}