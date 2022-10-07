import {
  Loader_status,
  Login_Failure,
  Login_Success,
  Logout_Success,
} from '../types';

export const Initial_State = {
  hideProgress: false,
  authStatus: '',
  userInfo: '',
  isLoading: false,
};

export const loginReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case Login_Success:
      return {
        ...state,
        userInfo: action.payload,
        authStatus: 'Token',
        hideProgress: true,
        isLoading: false,
      };
    case Logout_Success:
      return {...state, authStatus: null, hideProgress: true};
    case Loader_status:
      return {...state, authStatus: action.payload, hideProgress: true};
    case Login_Failure:
      return {...state, isLoading: action?.payload};
    default:
      return state;
  }
};
