import {actionType} from '../../Common';
import {
  Loader_status,
  Login_Failure,
  Login_Success,
  Logout_Failure,
  Logout_Success,
} from '../types';

export const Initial_State = {
  hideProgress: false,
  authStatus: '',
  userInfo: '',
  isLoading: false,
};

export const loginReducer = (state = Initial_State, action: actionType) => {
  switch (action.type) {
    case Login_Success:
      return {
        ...state,
        userInfo: action.payload,
        authStatus: action?.payload?.uid,
        hideProgress: true,
        isLoading: false,
      };
    case Logout_Success:
      return {...state, authStatus: action.payload, hideProgress: true};
    case Logout_Failure:
      return {...state, authStatus: action.payload, hideProgress: true};
    case Loader_status:
      return {...state, authStatus: action.payload, hideProgress: true};
    case Login_Failure:
      return {...state, isLoading: action?.payload};
    default:
      return state;
  }
};
