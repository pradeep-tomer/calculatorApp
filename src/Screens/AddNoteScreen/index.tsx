import {
  View,
  BackHandler,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';

//user-define Import files
import {styles} from './styles';
import {addNote} from '../../Redux/Actions/addNoteAction';
import * as Storage from '../../Services/asyncStoreConfig';
import {noteValidation} from '../../Validation/Validation';
import {Month} from '../../Common/Month';
import {back} from '../../Utils/images';
import {noteFieldType} from '../../Common';

const AddNoteScreen = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const NoteData = useSelector(
    (state: any) => state.addNoteReducer.addNoteData,
  );
  const [textField, setTextFields] = useState<noteFieldType>({
    title: '',
    description: '',
  });

  const AddNote = () => {
    var day = new Date().getDate();
    var month = Month();
    const date = day + month;
    const Valid = noteValidation(textField);
    const titleValid = noteValidation({title: textField?.title});
    const descriptionValid = noteValidation({title: textField?.description});

    if (Valid) {
      const data = [{...textField, date}, ...NoteData];
      Storage.saveData('noteData', JSON.stringify(data))
        .then(res => {
          Toast.show('Note Added Successfully');
          setTextFields((prev: object) => ({}));
          navigation.navigate('Note');
        })
        .catch(err => {
          Toast.show('Something went wrong');
        });
      dispatch(addNote([{...textField, date}]));
      return true;
    } else {
      navigation.navigate('Note');
      return true;
    }
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    AddNote,
  );
  backHandler.remove();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      AddNote,
    );
    return () => backHandler.remove();
  }, [textField]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          AddNote();
        }}
        style={styles.backBtnOpacity}>
        <Image source={back} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={{marginHorizontal: wp(4), marginTop: hp(4)}}>
        <TextInput
          multiline={true}
          style={{fontSize: hp(4)}}
          placeholder="Title"
          onChangeText={(value: string) =>
            setTextFields((prev: object) => ({...prev, title: value}))
          }
        />
        <TextInput
          multiline={true}
          placeholder="Note"
          onChangeText={(value: string) =>
            setTextFields((prev: object) => ({...prev, description: value}))
          }
          style={styles.inputField}
        />
      </View>
    </View>
  );
};

export default AddNoteScreen;
