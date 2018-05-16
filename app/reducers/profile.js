import { INITIAL_STATE } from '../store/initial_state/user';

import { UPDATE_SELECTED_USER } from '../actions/user';

import updateSelectedUser from './profile/update_selected_user';

export default function (state = INITIAL_STATE, action) {
  switch (action.type){
    case UPDATE_SELECTED_USER:
      return updateSelectedUser(state, action)
    default: 
      return state;
  }
}