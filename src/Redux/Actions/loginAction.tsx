import {loginType, userType} from '../../Common';
import {googleLogin, login, signOut} from '../../Firebase';

export const loginAction = (data: loginType) => {
  return (dispatch: any) => {
    dispatch(login(data));
  };
};

export function logOutAction(data: userType) {
  return (dispatch: any) => {
    dispatch(signOut(data));
  };
}

export function googleAction() {
  return (dispatch: any) => {
    dispatch(googleLogin());
  };
}
