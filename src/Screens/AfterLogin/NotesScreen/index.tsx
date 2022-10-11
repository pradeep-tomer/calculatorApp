import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import NoteItem from '../../../Components/NoteItem';
import {useNavigation} from '@react-navigation/native';
import {noteFieldType} from '../../../Common';
import {EditText} from '../../../Components/TextInput';
import {add} from '../../../Utils/images';

const NoteScreen = () => {
  const navigation = useNavigation<any>();
  const NoteData = useSelector((state: any) => state?.getNoteReducer);
  const [noteRecord, setNoteRecord] = useState<noteFieldType[]>([]);

  useEffect(() => {
    setNoteRecord(NoteData?.getNoteData);
  }, [NoteData]);

  const search = (value: string) => {
    var data: noteFieldType[] = [];
    if (value) {
      for (var i = 0; i < NoteData?.getNoteData.length; i++) {
        var length = 0;
        for (var j = 0; j < NoteData?.getNoteData[i].title.length; j++) {
          var flag = true;
          if (value[j]) {
            if (
              value[j].toLowerCase() ==
              NoteData?.getNoteData[i].title[j].toLowerCase()
            ) {
              flag = false;
              length++;
            }
          }
          if (!flag && value.length <= length) {
            data.push({
              title: NoteData?.getNoteData[i].title,
              date: NoteData?.getNoteData[i].date,
              description: NoteData?.getNoteData[i].description,
              visit: NoteData?.getNoteData[i].visit,
            });
          }
        }
      }
      setNoteRecord(data);
    } else {
      setNoteRecord(NoteData?.getNoteData);
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
          renderItem={(item: any) => {
            return <NoteItem item={item?.item} />;
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddNote');
        }}
        style={styles.addBtn}>
        <Image source={add} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default NoteScreen;
