import {combineReducers} from 'redux'
import UserReducer from './reducerUser'
import ValidateUserFieldsReducer from './reducer_validateUserFields';

const rootReducer = combineReducers({
  user: UserReducer,
  validateFields: ValidateUserFieldsReducer
});

export default rootReducer;
