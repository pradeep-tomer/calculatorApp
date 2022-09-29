import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';

//user-define Import files
import {EditText} from '../../Components/TextInput';
import {styles} from './styles';
import Button from '../../Components/Button';
import {addNote} from '../../Redux/Actions/addNoteAction';
import * as Storage from '../../Services/asyncStoreConfig';

const AddNoteScreen = () => {
  const dispatch = useDispatch<any>();
  const NoteData = useSelector(
    (state: any) => state.addNoteReducer.addNoteData,
  );
  const [textField, setTextFields] = useState<object>({
    title: '',
    description: '',
  });

  const AddNote = () => {
    const time = moment(Date.now()).format('h:mm A');
    const data = [{...textField, time}, ...NoteData];
    Storage.saveData('noteData', JSON.stringify(data));
    dispatch(addNote([{...textField, time}]));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Notes</Text>
      <Text style={styles.inputLabel}>Title</Text>
      <EditText
        placeholder="Enter title"
        onChangeText={(value: string) =>
          setTextFields((prev: object) => ({...prev, title: value}))
        }
      />
      <Text style={styles.inputLabel}>Description</Text>
      <TextInput
        multiline={true}
        placeholder="Enter Description"
        onChangeText={(value: string) =>
          setTextFields((prev: object) => ({...prev, description: value}))
        }
        style={styles.inputField}
      />
      <Button style={{marginTop: hp(3)}} title="Add Note" onPress={AddNote} />
    </View>
  );
};

export default AddNoteScreen;
