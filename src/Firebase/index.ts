import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import auth from '@react-native-firebase/auth';

//user-define Import files
import {getNote_Success} from '../Redux/types';
import {Month} from '../Common/Month';
import {registrationType} from '../Common';
import NavigationService from '../Navigation/NavigationService';

export const addNoteInDb = async (data: object) => {
  try {
    await firestore().collection('Note').add(data);
    Toast.show('Post added successfully');
  } catch (err) {
    Toast.show('Post not added something went wrong');
  }
};

const userInfoDb = async (uid: any, name: any) => {
  try {
    await firestore().collection('users').doc(uid).set({name: name});
  } catch (err) {
    console.log('User not added: ', err);
  }
};

export const registration = async(data: registrationType) => {
  const {email, password, fullName} = data;
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const uid = isUserCreated?.user?.uid;
      userInfoDb(uid, fullName);
      auth().currentUser?.sendEmailVerification();
      NavigationService.navigate('Before');
      Toast.show(
        'Please verify email check out link in your inbox',
        Toast.LONG,
      );
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        NavigationService.navigate('Login');
        Toast.show('Account Already exist Please Login');
      } else {
        Toast.show('something went wrong');
        console.log('Error: ', error);
      }
    }
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
            const month = Month(JSON.parse(moment(unix_time).format('M')));
            const date = dates + month;
            data.push({id, ...item?.data(), date});
          });
          dispatch({
            type: getNote_Success,
            payload: data,
          });
        });
    } catch (err) {
      Toast.show('Something went wrong. Please try after Some time');
      console.log('Error: ', err);
    }
  };
};
