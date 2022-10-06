import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import NoteItem from '../../../Components/NoteItem';
import {useNavigation} from '@react-navigation/native';
import {noteFieldType, noteType} from '../../../Common';
import {EditText} from '../../../Components/TextInput';

const NoteScreen = () => {
  const navigation = useNavigation<any>();
  const NoteData = useSelector(
    (state: any) => state?.getNoteReducer?.getNoteData,
  );
  const [noteRecord, setNoteRecord] = useState<noteFieldType[]>([]);

  useEffect(() => {
    setNoteRecord(NoteData);
  }, [NoteData]);

  const search = (value: string) => {
    var data: noteFieldType[] = [];
    if (value) {
      for (var i = 0; i < NoteData.length; i++) {
        var length = 0;
        for (var j = 0; j < NoteData[i].title.length; j++) {
          var flag = true;
          if (value[j]) {
            if (value[j].toLowerCase() == NoteData[i].title[j].toLowerCase()) {
              flag = false;
              length++;
            }
          }
          if (!flag && value.length <= length) {
            data.push({
              title: NoteData[i].title,
              date: NoteData[i].date,
              description: NoteData[i].description,
            });
          }
        }
      }
      setNoteRecord(data);
    } else {
      setNoteRecord(NoteData);
    }
  };

  return (
    <View style={styles.container}>
      <EditText
        style={styles.inputText}
        placeholder="Search note.."
        onChangeText={search}
        placeholderTextColor="rgb(121,120,121)"
      />
      <View style={{flex: 1}}>
        <FlatList
          numColumns={2}
          data={noteRecord}
          renderItem={(item: noteType) => {
            return <NoteItem item={item?.item} />;
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddNote');
        }}
        style={styles.addBtn}>
        <Text style={{color: 'black', fontSize: hp(6)}}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteScreen;
