import {actionType} from '../../Common';
import {Register_Loader, Register_Success} from '../types';

export const Initial_State = {
  isLoading: false,
};

export const registerReducer = (state = Initial_State, action: actionType) => {
  switch (action.type) {
    case Register_Loader:
      return {...state, isLoading: true};
    case Register_Success:
      return {...state, isLoading: false};
    default:
      return state;
  }
};
