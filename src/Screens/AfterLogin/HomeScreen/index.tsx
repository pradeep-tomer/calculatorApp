import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {firebase} from '@react-native-firebase/auth';

//user-define Import files
import Button from '../../../Components/Button';
import {styles} from './styles';
import {logOutAction} from '../../../Redux/Actions/loginAction';
import {userInfoAction} from '../../../Redux/Actions/userInfoAction';
import {getNoteAction} from '../../../Redux/Actions/getNoteAction';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const userInfo = useSelector((state: any) => state.userInfoReducer);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      dispatch(getNoteAction());
      dispatch(userInfoAction(user?.uid));
    }
  }, []);

  const navigate = (name: string) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigate('Calculator');
        }}
        title="Calculator"
        style={styles.btn}
      />
      <Button
        onPress={() => {
          navigate('Stopwatch');
        }}
        title="Stopwatch"
        style={styles.btn}
      />
      <Button
        onPress={() => {
          navigate('Note');
        }}
        title="Notes"
        style={styles.btn}
      />
      <Button
        onPress={() => {
          dispatch(logOutAction(userInfo.userInfo));
        }}
        title="SignOut"
        style={styles.btn}
      />
    </View>
  );
};

export default HomeScreen;
