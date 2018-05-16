import { combineReducers } from 'redux';

import user from './user'
import post from './post';
import profile from './profile'

export default combineReducers({user, post, profile}); 