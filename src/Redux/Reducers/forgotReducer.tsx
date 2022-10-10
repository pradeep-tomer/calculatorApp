import {actionType} from '../../Common';
import {Forgot_Failure, Forgot_success} from '../types';

export const Initial_State = {
  loading: false,
};

export const forgotReducer = (state = Initial_State, action: actionType) => {
  switch (action.type) {
    case Forgot_success:
      return {...state, loading: action?.payload};
    case Forgot_Failure:
      return {...state, loading: action?.payload};
    default:
      return state;
  }
};
