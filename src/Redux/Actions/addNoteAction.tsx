import {Add_Note} from '../types';

export const addNote = (data: object) => {
  return (dispatch: any) => {
    dispatch({
      type: Add_Note,
      payload: data,
    });
  };
};
