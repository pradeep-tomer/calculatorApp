import {registrationType} from '../../Common';
import {registration} from '../../Firebase';

export const registerAction = (data: registrationType) => {
  return (dispatch: any) => {
    dispatch(registration(data));
  };
};
