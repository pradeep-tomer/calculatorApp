import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

//user-define Import files
import {getNoteAction} from '../Redux/Actions/getNoteAction';
import AfterLoginNavigator from './afterLoginNavigator';
import BeforeLoginNavigator from './beforeLoginNavigator';
import NavigationService from './NavigationService';

const RootStack = createNativeStackNavigator();
const Navigator = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getNoteAction());
  }, []);

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Before" component={BeforeLoginNavigator} />
        <RootStack.Screen name="After" component={AfterLoginNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
