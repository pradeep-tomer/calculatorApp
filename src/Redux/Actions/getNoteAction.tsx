import {getNote} from '../../Firebase';

export const getNoteAction = () => {
  return (dispatch: any) => {
    dispatch(getNote());
  };
};
