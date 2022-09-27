import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//user-define Import files
import HomeScreen from '../Screens/HomeScreen';
import CalculatorScreen from '../Screens/CalculatorScreen';
import StopwatchScreen from '../Screens/StopwatchScreen';
import NoteScreen from '../Screens/NotesScreen';

const RootStack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Calculator" component={CalculatorScreen} />
        <RootStack.Screen name="Stopwatch" component={StopwatchScreen} />
        <RootStack.Screen name="Note" component={NoteScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
