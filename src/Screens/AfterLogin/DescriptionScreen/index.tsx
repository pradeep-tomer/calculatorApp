import {View, Text} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//user-define Import files
import {styles} from './styles';

const DescriptionScreen = ({route}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.noteView}>
        <Text style={[styles.text, {textAlign: 'right'}]}>
          {route?.params?.item?.date}
        </Text>
        <Text style={[styles.text, {textAlign: 'center'}]}>
          {route?.params?.item?.title}
        </Text>
        <Text style={[styles.text, {fontSize: hp(2), marginTop: hp(2)}]}>
          {route?.params?.item?.description}
        </Text>
      </View>
    </View>
  );
};

export default DescriptionScreen;
