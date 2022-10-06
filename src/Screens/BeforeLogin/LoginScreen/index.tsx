import {View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//user-define Import files
import {styles} from './styles';
import Button from '../../../Components/Button';
import {EditText} from '../../../Components/TextInput';
import {
  door,
  Email,
  facebook,
  Google,
  passwordEyes,
  passwordEyesHide,
} from '../../../Utils/images';
import {SocialButton} from '../../../Components/SocialButton';
import {loginType} from '../../../Common';
import {LoginValidation} from '../../../Validation/Validation';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [secureTextPass, setSecureText] = useState<boolean>(true);
  const [textField, setTextFields] = useState<loginType>({
    email: '',
    password: '',
  });

  const Login = () => {
    const fieldData = {
      email: textField.email.trim(),
      password: textField.password,
    };
    const valid = LoginValidation(fieldData);
    if (valid) {
      console.log('All fields are valid');
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#D3D3D3'}}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.textFieldView}>
          <Text style={styles.labelText}>Email</Text>
          <View style={styles.inputFieldView}>
            <Image source={Email} style={styles.inputIcon} />
            <EditText
              style={styles.inputField}
              placeholder="Enter Your Email"
              onChangeText={(value: string) =>
                setTextFields((prev: loginType) => ({
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
                setTextFields((prev: loginType) => ({
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
        <View style={styles.forgotView}>
          <Button
            disabled={true}
            btnStyle={{color: 'black'}}
            title="forgot password?"
          />
        </View>
        <Button
          btnStyle={{color: '#fff'}}
          title="LOGIN"
          onPress={Login}
          style={styles.loginBtn}
        />
        <View style={styles.loginWithView}>
          <View style={styles.loginWithLine} />
          <Text style={styles.loginWithText}>or login with</Text>
          <View style={styles.loginWithLine} />
        </View>
        <View style={styles.socialBtnView}>
          <SocialButton title="Google" icon={Google} />
          <SocialButton title="Facebook" icon={facebook} />
        </View>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>Don't have an account? </Text>
        <Button
          btnStyle={{color: 'blue'}}
          onPress={() => {
            navigation.navigate('Register');
          }}
          title="Register"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
