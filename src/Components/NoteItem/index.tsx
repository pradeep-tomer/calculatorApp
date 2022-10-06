import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {styles} from './styles';
import {noteFieldType, noteItemType} from '../../Common';

const NoteItem = (data: noteItemType) => {
  const navigation = useNavigation<any>();
  const {item} = data;

  const note = (item: noteFieldType) => {
    navigation.navigate('Description', {item});
  };

  return (
    <TouchableOpacity
      style={styles.itemOpacity}
      onPress={() => {
        note(item);
      }}>
      <Text style={[styles.itemText, {textAlign: 'right', marginTop: hp(2)}]}>
        {item?.date}
      </Text>
      <Text
        style={[styles.itemText, {marginVertical: hp(1), textAlign: 'center'}]}>
        {item?.title}
      </Text>
      <Text numberOfLines={5} style={[styles.itemText, {fontSize: hp(2.2)}]}>
        {item?.description}
      </Text>
    </TouchableOpacity>
  );
};

export default NoteItem;
