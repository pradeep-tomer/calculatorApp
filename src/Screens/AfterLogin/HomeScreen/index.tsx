import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

//user-define Import files
import Button from '../../../Components/Button';
import {styles} from './styles';
import {logOutAction} from '../../../Redux/Actions/loginAction';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const state = useSelector((state: any) => state.loginReducer);

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
          dispatch(logOutAction(state?.userInfo?.uid));
        }}
        title="SignOut"
        style={styles.btn}
      />
    </View>
  );
};

export default HomeScreen;
