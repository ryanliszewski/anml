import { createStore } from 'redux';

import reducer from '../reducers/reducer';

export default function configureStore(){
  const simpleStore = createStore(reducer);

  return simpleStore;
}