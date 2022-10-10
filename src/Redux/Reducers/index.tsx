import {combineReducers} from 'redux';

//user-define files
import {getNoteReducer} from './getNoteReducer';
import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';
import {userInfoReducer} from './userInfoReducer';
import {forgotReducer} from './forgotReducer';

const appReducer = combineReducers({
  getNoteReducer,
  loginReducer,
  registerReducer,
  userInfoReducer,
  forgotReducer,
});

export default appReducer;
