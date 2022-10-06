import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Import User-define files
import HomeScreen from '../Screens/AfterLogin/HomeScreen';
import CalculatorScreen from '../Screens/AfterLogin/CalculatorScreen';
import StopwatchScreen from '../Screens/AfterLogin/StopwatchScreen';
import NoteScreen from '../Screens/AfterLogin/NotesScreen';
import DescriptionScreen from '../Screens/AfterLogin/DescriptionScreen';
import AddNoteScreen from '../Screens/AfterLogin/AddNoteScreen';

const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => {
  return (
    <AfterLoginStack.Navigator screenOptions={{headerShown: false}}>
      <AfterLoginStack.Screen name="Home" component={HomeScreen} />
      <AfterLoginStack.Screen name="Calculator" component={CalculatorScreen} />
      <AfterLoginStack.Screen name="Stopwatch" component={StopwatchScreen} />
      <AfterLoginStack.Screen name="Note" component={NoteScreen} />
      <AfterLoginStack.Screen name="AddNote" component={AddNoteScreen} />
      <AfterLoginStack.Screen
        name="Description"
        component={DescriptionScreen}
      />
    </AfterLoginStack.Navigator>
  );
};

export default AfterLoginNavigator;
