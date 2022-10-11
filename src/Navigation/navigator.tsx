import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

//user-define Import files
import AfterLoginNavigator from './afterLoginNavigator';
import BeforeLoginNavigator from './beforeLoginNavigator';
import NavigationService from './NavigationService';
import * as Storage from '../Services/asyncStoreConfig';
import {Loader_status} from '../Redux/types';
import LoaderScreen from '../Components/Loader';

const RootStack = createNativeStackNavigator();
const Navigator = () => {
  const dispatch = useDispatch<any>();
  const state = useSelector((state: any) => state.loginReducer);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '667370963371-qtoa0lq5cd6fmfig33v5b83648s3pfrd.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    Storage.getData('Token')
      .then(res => {
        dispatch({
          type: Loader_status,
          payload: res,
        });
      })
      .catch(error => {
        console.log('Rejected: ', error);
      });
  }, []);

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {!state?.hideProgress ? (
          <RootStack.Screen name="Loader" component={LoaderScreen} />
        ) : state?.authStatus ? (
          <RootStack.Screen name="AfterLogin" component={AfterLoginNavigator} />
        ) : (
          <RootStack.Screen
            name="BeforeLogin"
            component={BeforeLoginNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
