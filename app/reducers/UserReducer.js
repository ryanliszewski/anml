import { USER_SELECTED } from '../actions/types';
import { createStore } from 'redux';

const INITIAL_STATE = {
  selectedUser: null
}

export const userSelected = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case USER_SELECTED: 
      return Object.assign({}, state, { ...action.selectedUser });
    default: 
      return state;
  }
}

let store = createStore(userSelected);

export default store; 


