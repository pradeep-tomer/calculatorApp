import {actionType} from '../../Common';
import {getNote_Success} from '../types';

export const Initial_State = {
  getNoteData: [],
};

export const getNoteReducer = (state = Initial_State, action: actionType) => {
  switch (action.type) {
    case getNote_Success:
      return {...state, getNoteData: [...action.payload]};
    default:
      return state;
  }
};
