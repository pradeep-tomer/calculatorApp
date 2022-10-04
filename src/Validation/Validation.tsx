import Toast from 'react-native-simple-toast';

const ValidTextField = (props: object) => {
  const valid = Object.values(props)?.every(value => value?.trim());
  return valid;
};

export const noteValidation = (data: object) => {
  if (ValidTextField(data)) return true;
  else return false;
};
