import {Add_Note} from '../types';

export const Initial_State = {
  addNoteData: [],
};

export const addNoteReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case Add_Note:
      return {...state, addNoteData: [...action.payload, ...state.addNoteData]};
    default:
      return state;
  }
};
