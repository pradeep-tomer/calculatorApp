import {combineReducers} from 'redux';

//user-define files
import {getNoteReducer} from './getNoteReducer';
import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';

const appReducer = combineReducers({
  getNoteReducer,
  loginReducer,
  registerReducer,
});

export default appReducer;
