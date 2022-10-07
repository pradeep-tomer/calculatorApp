import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Import User-define files
import LoginScreen from '../Screens/BeforeLogin/LoginScreen';
import RegisterScreen from '../Screens/BeforeLogin/RegisterScreen';
import ForgotScreen from '../Screens/BeforeLogin/ForgotScreen';

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator screenOptions={{headerShown: false}}>
      <BeforeLoginStack.Screen name="Login" component={LoginScreen} />
      <BeforeLoginStack.Screen name="Register" component={RegisterScreen} />
      <BeforeLoginStack.Screen name="Forgot" component={ForgotScreen} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
