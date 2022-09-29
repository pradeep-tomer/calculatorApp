// this. File combines all reducer and export them
import {combineReducers} from 'redux';

import {addNoteReducer} from './AddNoteReducer';

const appReducer = combineReducers({
  addNoteReducer,
});

export default appReducer;
