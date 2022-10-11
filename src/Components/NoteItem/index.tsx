import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import {noteFieldType, noteItemType} from '../../Common';
import {updateNote} from '../../Firebase';

const NoteItem = (data: noteItemType) => {
  const {item} = data;
  const navigation = useNavigation<any>();
  const state = useSelector((state: any) => state?.userInfoReducer?.userInfo);

  const note = (item: noteFieldType) => {
    const {id}: any = item;
    if (item?.visit?.indexOf(state?.uid) == -1) {
      updateNote(id, state?.uid, item?.visit);
    }
    navigation.navigate('Description', {item});
  };

  const visitStatus = (item: Array<string>) => {
    if (item.indexOf(state?.uid) == -1) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.itemOpacity,
        {
          backgroundColor: visitStatus(item?.visit) ? '#D5BC74' : '#BE8F00',
        },
      ]}
      onPress={() => {
        note(item);
      }}>
      <Text
        style={[
          styles.itemText,
          {textAlign: 'right', fontSize: hp(1.5), marginTop: hp(2)},
        ]}>
        {item?.date}
      </Text>
      <Text style={[styles.itemText, {marginVertical: hp(1)}]}>
        {item?.title}
      </Text>
      <Text numberOfLines={5} style={[styles.itemText, {fontSize: hp(2.2)}]}>
        {item?.description}
      </Text>
    </TouchableOpacity>
  );
};

export default NoteItem;
