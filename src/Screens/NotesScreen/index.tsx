import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import NoteItem from '../../Components/NoteItem';
import {useNavigation} from '@react-navigation/native';
import {data, noteType} from '../../Common';

const NoteScreen = () => {
  const navigation = useNavigation<any>();
  const NoteData = useSelector(
    (state: any) => state?.addNoteReducer?.addNoteData,
  );
  const [noteRecord, setNoteRecord] = useState<any>([]);

  useEffect(() => {
    setNoteRecord(NoteData);
  }, [NoteData]);

  const search = (value: string) => {
    if (value) {
      const data = [];
      for (var i = 0; i <= value.length - 1; i++) {
        for (var j = i; j < noteRecord.length; j++) {
          for (var k = 0; k < noteRecord[j]?.title.length; k++) {
            if (value[i] == noteRecord[j]?.title[k]) {
              data.push({
                title: noteRecord[j]?.title,
                description: noteRecord[j]?.description,
                time: noteRecord[j]?.time,
              });
              break;
            }
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
      <TextInput
        style={styles.inputText}
        placeholder="Search note..."
        onChangeText={search}
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
