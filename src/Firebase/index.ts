import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

//user-define Import files
import {
  Forgot_Failure,
  Forgot_success,
  GetNote_Success,
  Login_Failure,
  Login_Success,
  Logout_Failure,
  Logout_Success,
  Register_Failure,
  Register_Success,
  user_Info,
} from '../Redux/types';
import {loginType, registrationType, userType} from '../Common';
import NavigationService from '../Navigation/NavigationService';
import * as Storage from '../Services/asyncStoreConfig';
import { FBLogout } from '../Services/facebook';

export const registration = (data: registrationType) => {
  return async (dispatch: any) => {
    const {email, password, fullName} = data;
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const uid = isUserCreated?.user?.uid;
      auth().currentUser?.sendEmailVerification();
      userInfoDb({uid, fullName, email, type: 0});
      NavigationService.navigate('Login');
      dispatch({
        type: Register_Success,
        payload: false,
      });
      Toast.show(
        'Please verify email check out link in your inbox',
        Toast.LONG,
      );
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        NavigationService.navigate('Login');
        dispatch({
          type: Register_Failure,
          payload: false,
        });
        Toast.show('Account Already exist Please Login');
      } else {
        dispatch({
          type: Register_Failure,
          payload: false,
        });
        Toast.show('something went wrong');
        console.log('Error: ', error);
      }
    }
  };
};

export const login = (data: loginType) => {
  const {email, password} = data;

  return (dispatch: any) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user.emailVerified) {
          Storage.saveData('Token', res?.user?.uid);
          updateUser(1, res?.user?.uid);
          dispatch({
            type: Login_Success,
            payload: res?.user,
          });
          Toast.show('Login Successfully');
        } else {
          dispatch({
            type: Login_Failure,
            payload: false,
          });
          Toast.show('Please Verify Your Email');
        }
      })
      .catch(Err => {
        dispatch({
          type: Login_Failure,
          payload: false,
        });
        Toast.show('Invalid credential');
      });
  };
};

export const googleLogin = () => {
  return async (dispatch: any) => {
    try {
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo?.idToken,
      );
      const res = await auth().signInWithCredential(googleCredential);
      Storage.saveData('Token', res?.user?.uid);
      const uid = res?.user?.uid;
      const email = res?.user?.email;
      const fullName = res?.user?.displayName;
      userInfoDb({uid, fullName, email, type: 2});
      Toast.show('Login Successfully');
      dispatch({
        type: Login_Success,
        payload: res?.user,
      });
      return res;
    } catch (err) {
      Toast.show('Something Went Wrong');
      console.log('Google error!' + err);
    }
  };
};

export const forgotPassword = (email: string) => {
  return (dispatch: any) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(res => {
        Toast.show('Password reset link has been send on your email');
        dispatch({
          type: Forgot_success,
          payload: false,
        });
        NavigationService.navigate('Login');
      })
      .catch(err => {
        dispatch({
          type: Forgot_Failure,
          payload: false,
        });
        Toast.show('Something went wrong');
      });
  };
};


export const signOut = (data: userType) => {
  const {uid, type} = data;

  return async (dispatch: any) => {
    try {
      FBLogout()
      if (type == 1) {
        auth().signOut();
        updateUser(0, uid);
        Storage.removeData('Token');
        dispatch({
          type: Logout_Success,
          payload: null,
        });
      }
      if (type == 2) {
        await GoogleSignin.signOut();
        updateUser(0, uid);
        Storage.removeData('Token');
        dispatch({
          type: Logout_Success,
          payload: null,
        });
      }
    } catch (error) {
      Toast.show('something went wrong');
      dispatch({
        type: Logout_Failure,
        payload: null,
      });
      console.error(error);
    }
  };
};

export const getUserInfo = (uid: string) => {
  return (dispatch: any) => {
    try {
      firestore()
        .collection('users')
        .doc(uid)
        .get()
        .then(res => {
          dispatch({
            type: user_Info,
            payload: res?.data(),
          });
        });
    } catch (err) {
      Toast.show('Something went wrong. Please try after Some time');
    }
  };
};

export const getNote = () => {
  return async (dispatch: any) => {
    try {
      let data: Array<object> = [];
      await firestore()
        .collection('Note')
        .orderBy('time', 'desc')
        .onSnapshot((res: any) => {
          res.docs.map((item: any, index: number) => {
            if (index == 0) {
              data = [];
            }
            const id = item?.id;
            const unix_time = item?.data()?.time;
            const dates = moment(unix_time).format('DD');
            const month = moment(unix_time).format('MMM');
            const date = dates + month;
            data.push({id, ...item?.data(), date});
          });
          dispatch({
            type: GetNote_Success,
            payload: data,
          });
        });
    } catch (err) {
      Toast.show('Something went wrong. Please try after Some time');
      console.log('Error: ', err);
    }
  };
};

export const addNoteInDb = async (collections: string, data: object) => {
  try {
    await firestore().collection(collections).add(data);
    if (collections == 'Note') Toast.show('Post added successfully');
  } catch (err) {
    Toast.show('Post not added something went wrong');
  }
};

export const updateNote = (
  noteId: string,
  uid: string,
  visit: Array<string>,
) => {
  try {
    firestore()
      .collection('Note')
      .doc(noteId)
      .set({visit: [...visit, uid]}, {merge: true});
  } catch (err) {
    Toast.show('something went wrong');
    console.log('Error: ', err);
  }
};

const userInfoDb = async (data: userType) => {
  const {uid, email, fullName, type} = data;
  try {
    await firestore()
      .collection('users')
      .doc(uid)
      .set({fullName, uid, email, type});
  } catch (err) {
    Toast.show('something went wrong');
    console.log('User not added: ', err);
  }
};

export const updateUser = (type: number, uid: string) => {
  try {
    firestore().collection('users').doc(uid).set({type, uid}, {merge: true});
  } catch (err) {
    Toast.show('something went wrong');
    console.log('Error: ', err);
  }
};
