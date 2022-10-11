import {View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import Button from '../../../Components/Button';
import {EditText} from '../../../Components/TextInput';
import {
  door,
  Email,
  passwordEyes,
  passwordEyesHide,
  select,
  square,
  User,
} from '../../../Utils/images';
import {registrationType} from '../../../Common';
import {RegisterValidation} from '../../../Validation/Validation';
import {registerAction} from '../../../Redux/Actions/registerAction';
import {Register_Loader} from '../../../Redux/types';
import {Loader} from '../../../Components/Loader';

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const state = useSelector((state: any) => state.registerReducer);
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(false);
  const [secureTextPass, setSecureText] = useState<boolean>(true);
  const [secureConfirmPass, setSecureConfirmPass] = useState<boolean>(true);
  const [textField, setTextFields] = useState<registrationType>({
    email: '',
    password: '',
    fullName: '',
    confirmPass: '',
  });

  const Register = () => {
    const fieldData = {
      email: textField.email.trim(),
      password: textField.password,
      fullName: textField.fullName.trim(),
      confirmPass: textField.confirmPass,
    };
    const valid = RegisterValidation(fieldData);
    if (valid) {
      if (checkBoxStatus) {
        dispatch({type: Register_Loader});
        dispatch(registerAction(fieldData));
      } else Toast.show('Please Agree terms & conditions');
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'skyblue'}}>
      <View style={styles.container}>
        <Loader visible={state?.isLoading} />
        <Text style={styles.headerText}>Register</Text>
        <View style={styles.textFieldView}>
          <Text style={styles.labelText}>Full Name</Text>
          <View style={styles.inputFieldView}>
            <Image source={User} style={styles.inputIcon} />
            <EditText
              style={styles.inputField}
              placeholder="Enter Your full Name"
              onChangeText={(value: string) =>
                setTextFields((prev: registrationType) => ({
                  ...prev,
                  fullName: value,
                }))
              }
            />
          </View>
        </View>
        <View style={styles.textFieldView}>
          <Text style={styles.labelText}>Email</Text>
          <View style={styles.inputFieldView}>
            <Image source={Email} style={styles.inputIcon} />
            <EditText
              style={styles.inputField}
              placeholder="Enter Your Email"
              onChangeText={(value: string) =>
                setTextFields((prev: registrationType) => ({
                  ...prev,
                  email: value,
                }))
              }
            />
          </View>
        </View>
        <View style={styles.textFieldView}>
          <Text style={styles.labelText}>Password</Text>
          <View style={styles.inputFieldView}>
            <Image source={door} style={styles.inputIcon} />
            <EditText
              style={styles.inputField}
              placeholder="Enter Your Password"
              secureTextEntry={secureTextPass}
              onChangeText={(value: string) =>
                setTextFields((prev: registrationType) => ({
                  ...prev,
                  password: value,
                }))
              }
            />
            <TouchableOpacity
              onPress={() => {
                setSecureText(secureTextPass ? false : true);
              }}>
              <Image
                source={secureTextPass ? passwordEyes : passwordEyesHide}
                style={[styles.inputIcon, {marginRight: wp(3)}]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textFieldView}>
          <Text style={styles.labelText}>Confirm Password</Text>
          <View style={styles.inputFieldView}>
            <Image source={door} style={styles.inputIcon} />
            <EditText
              secureTextEntry={secureConfirmPass}
              style={styles.inputField}
              placeholder="Enter Confirm Password"
              onChangeText={(value: string) =>
                setTextFields((prev: registrationType) => ({
                  ...prev,
                  confirmPass: value,
                }))
              }
            />
            <TouchableOpacity
              onPress={() => {
                setSecureConfirmPass(secureConfirmPass ? false : true);
              }}>
              <Image
                source={secureConfirmPass ? passwordEyes : passwordEyesHide}
                style={[styles.inputIcon, {marginRight: wp(3)}]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.termsView}>
            <TouchableOpacity
              style={styles.checkBoxOpacity}
              onPress={() => {
                checkBoxStatus
                  ? setCheckBoxStatus(false)
                  : setCheckBoxStatus(true);
              }}>
              <Image
                style={styles.checkBoxImg}
                source={!checkBoxStatus ? square : select}
              />
            </TouchableOpacity>
            <Text style={[styles.termText, {marginLeft: wp(2)}]}>
              I accept the{' '}
            </Text>
            <TouchableOpacity disabled={true}>
              <Text style={[styles.termText, {color: 'blue'}]}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          btnStyle={{color: '#fff'}}
          title="Register"
          style={styles.RegisterBtn}
          onPress={Register}
        />
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>Already have an account? </Text>
        <Button
          btnStyle={{color: 'blue'}}
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Login"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
