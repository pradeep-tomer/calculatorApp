import {combineReducers} from 'redux';

//user-define files
import {getNoteReducer} from './getNoteReducer';

const appReducer = combineReducers({
  getNoteReducer,
});

export default appReducer;
