import {View, Image, Text} from 'react-native';
import React, {useState} from 'react';

//user-define Import files
import {styles} from './styles';
import {Email} from '../../../Utils/images';
import {EditText} from '../../../Components/TextInput';
import Button from '../../../Components/Button';
import {ForgotValidation} from '../../../Validation/Validation';
import {forgotPassword} from '../../../Firebase';

const ForgotScreen = () => {
  const [email, setEmail] = useState<String>('');

  const send = () => {
    const fieldData = {
      email: email.trim(),
    };
    const valid = ForgotValidation(fieldData);
    if (valid) {
      forgotPassword(fieldData?.email);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ForgotScreen</Text>
      <View style={styles.textFieldView}>
        <Text style={styles.labelText}>Email</Text>
        <View style={styles.inputFieldView}>
          <Image source={Email} style={styles.inputIcon} />
          <EditText
            style={styles.inputField}
            placeholder="Enter Your Email"
            onChangeText={(value: string) => setEmail(value)}
          />
        </View>
      </View>
      <Button onPress={send} style={styles.btn} title="SEND EMAIL" />
    </View>
  );
};

export default ForgotScreen;
