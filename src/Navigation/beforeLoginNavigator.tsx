import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Import User-define files
import LoginScreen from '../Screens/BeforeLogin/LoginScreen';
import RegisterScreen from '../Screens/BeforeLogin/RegisterScreen';

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator screenOptions={{headerShown: false}}>
      <BeforeLoginStack.Screen name="Login" component={LoginScreen} />
      <BeforeLoginStack.Screen name="Register" component={RegisterScreen} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
