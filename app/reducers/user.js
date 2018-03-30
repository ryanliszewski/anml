import { INITIAL_STATE } from '../store/initial_state/user';

import { UPDATE_USER_DETAILS } from '../actions/user';

import updateUserDetails from './user/update_user_details';

export default function (state = INITIAL_STATE, action) {
  switch (action.type){
    case UPDATE_USER_DETAILS:
      return updateUserDetails(state, action)
    default: 
      return state;
  }
}