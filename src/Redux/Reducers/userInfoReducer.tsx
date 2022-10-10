import {actionType} from '../../Common';
import {user_Info} from '../types';

export const Initial_State = {
  userInfo: '',
};

export const userInfoReducer = (state = Initial_State, action: actionType) => {
  switch (action.type) {
    case user_Info:
      return {...state, userInfo: action?.payload};
    default:
      return state;
  }
};
