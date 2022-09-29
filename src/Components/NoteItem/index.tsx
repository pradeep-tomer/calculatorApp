import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {styles} from './styles';

const NoteItem = (data: any) => {
  const navigation = useNavigation<any>();
  const {item} = data;

  const notePress = (item: any) => {
    navigation.navigate('Description', {item});
  };

  return (
    <TouchableOpacity
      style={styles.itemOpacity}
      onPress={() => {
        notePress(item);
      }}>
      <Text style={[styles.itemText, {textAlign: 'right'}]}>{item?.time}</Text>
      <Text
        style={[styles.itemText, {marginVertical: hp(1), textAlign: 'center'}]}>
        {item?.title}
      </Text>
      <Text numberOfLines={8} style={styles.itemText}>
        {item?.description}
      </Text>
    </TouchableOpacity>
  );
};

export default NoteItem;
