/**
 * Created by alextishin on 06.09.16.
 */
import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  RESET_USER
} from '../actions/users'

const INITIAL_STATE = {
  user: null,
  status: null
}


export default function (state=INITIAL_STATE, action) {
  let error;

  switch(action.type) {
    case SIGNUP_USER:
          return {...state, user: null, status:'signup'};
    case SIGNUP_USER_SUCCESS:
          return {...state, user: action.payload.data.user, status:'authenticated'};
    case SIGNUP_USER_FAILURE:
          error = action.payload.data || {message: action.payload.message};
          return { ...state, user: null, status:'signup', error:error, loading: false};
    default:
          return state;
  }
}
