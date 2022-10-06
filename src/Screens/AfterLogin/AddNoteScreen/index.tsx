import {View, BackHandler, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//user-define Import files
import {styles} from './styles';
import {noteValidation} from '../../../Validation/Validation';
import {back} from '../../../Utils/images';
import {noteFieldType} from '../../../Common';
import {addNoteInDb} from '../../../Firebase';
import {EditText} from '../../../Components/TextInput';

const AddNoteScreen = () => {
  const navigation = useNavigation<any>();
  const [textField, setTextFields] = useState<noteFieldType>({
    title: '',
    description: '',
  });

  const AddNote = () => {
    var time = Date.now();
    // var month = Month();
    // const date = day + month;
    // const titleValid = noteValidation({title: textField?.title});
    // const descriptionValid = noteValidation({title: textField?.description});
    const Valid = noteValidation(textField);
    if (Valid) {
      addNoteInDb({...textField, time});
      navigation.navigate('Note');
      return true;
    } else {
      navigation.navigate('Note');
      return true;
    }
    return true;
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
        <EditText
          multiline={true}
          placeholder="Title"
          style={{fontSize: hp(4)}}
          onChangeText={(value: string) =>
            setTextFields((prev: object) => ({...prev, title: value}))
          }
        />
        <EditText
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