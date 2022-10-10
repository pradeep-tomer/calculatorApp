import {getUserInfo} from '../../Firebase';

export const userInfoAction = (uid: string) => {
  return (dispatch: any) => {
    dispatch(getUserInfo(uid));
  };
};
