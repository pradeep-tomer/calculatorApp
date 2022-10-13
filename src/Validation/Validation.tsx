import Toast from 'react-native-simple-toast';

//user-define Import files
import {loginType, registrationType} from '../Common';

const ValidTextField = (props: object) => {
  const valid = Object.values(props)?.every(value => value?.trim());
  return valid;
};

export const noteValidation = (data: object) => {
  if (ValidTextField(data)) return true;
  else return false;
};

export const fullNames = (name: string) => {
  const Name = name.trim();
  const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
  const valid = pattern.test(Name);
  return valid;
};

const EmailValidate = (email: string) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const emails = email.trim();
  if (reg.test(emails)) return true;
  else {
    return false;
  }
};

const Password_Validation = (pass: string) => {
  const pattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
  const valid = pattern.test(pass);
  return valid;
};

export const RegisterValidation = (data: registrationType) => {
  const {fullName, email, password, confirmPass} = data;
  if (!ValidTextField(data)) return Toast.show('Required all fields');
  if (!fullNames(fullName)) return Toast.show('Invalid Name');
  if (!EmailValidate(email)) return Toast.show('Invalid Email Address');
  if (!(password == confirmPass)) return Toast.show('Password mismatch');
  if (Password_Validation(password)) return true;
  else return Toast.show('Please fill strong password');
};

export const LoginValidation = (data: loginType) => {
  const {email, password} = data;
  if (!ValidTextField(data)) return Toast.show('Required all fields');
  if (!EmailValidate(email)) return Toast.show('Invalid Email Address');
  if (Password_Validation(password)) return true;
  else return Toast.show('Please fill strong password');
};

export const ForgotValidation = (data: {email: string}) => {
  const {email} = data;
  if (!ValidTextField(data)) return Toast.show('Please fill Email');
  if (EmailValidate(email)) return true;
  else return Toast.show('Invalid Email Address');
};
