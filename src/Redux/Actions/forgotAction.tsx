import {forgotPassword} from '../../Firebase';

export const forgotAction = (email: string) => {
  return (dispatch: any) => {
    dispatch(forgotPassword(email));
  };
};
