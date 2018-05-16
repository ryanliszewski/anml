import { INITIAL_STATE } from '../store/initial_state/post';
import { UPDATE_SELECTED_POST } from '../actions/selectedPost';
import updateSelectedPost from './post/update_selected_post';

export default function (state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_SELECTED_POST:
      return updateSelectedPost(state,action);
    default:
      return state;
  }
}