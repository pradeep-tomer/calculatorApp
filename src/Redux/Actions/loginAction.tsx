import {loginType} from '../../Common';
import {googleLogin, login, signOut} from '../../Firebase';

export const loginAction = (data: loginType) => {
  return (dispatch: any) => {
    dispatch(login(data));
  };
};

export function logOutAction(uid: string) {
  return (dispatch: any) => {
    dispatch(signOut(uid));
  };
}

export function googleAction() {
  return (dispatch: any) => {
    dispatch(googleLogin());
  };
}
