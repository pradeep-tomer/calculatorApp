import {actionType} from '../../Common';
import {GetNote_Success} from '../types';

export const Initial_State = {
  getNoteData: [],
};

export const getNoteReducer = (state = Initial_State, action: actionType) => {
  switch (action.type) {
    case GetNote_Success:
      return {...state, getNoteData: [...action.payload]};
    default:
      return state;
  }
};
