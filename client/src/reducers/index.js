// combines all reducers
// reducers handle state (state, action)

import { combineReducers  } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});