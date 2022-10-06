import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

//user-define Import files
import Button from '../../../Components/Button';
import {styles} from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<any>();

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
    </View>
  );
};

export default HomeScreen;
