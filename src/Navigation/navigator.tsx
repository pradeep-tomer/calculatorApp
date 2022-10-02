import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

//user-define Import files
import HomeScreen from '../Screens/HomeScreen';
import CalculatorScreen from '../Screens/CalculatorScreen';
import StopwatchScreen from '../Screens/StopwatchScreen';
import NoteScreen from '../Screens/NotesScreen';
import DescriptionScreen from '../Screens/DescriptionScreen';
import AddNoteScreen from '../Screens/AddNoteScreen';
import * as Storage from '../Services/asyncStoreConfig';
import {addNote} from '../Redux/Actions/addNoteAction';

const RootStack = createNativeStackNavigator();
const Navigator = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    Storage.getData('noteData')
      .then((res: any) => {
        if (res) {
          const data = JSON.parse(res);
          dispatch(addNote(data));
        }
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Calculator" component={CalculatorScreen} />
        <RootStack.Screen name="Stopwatch" component={StopwatchScreen} />
        <RootStack.Screen name="Note" component={NoteScreen} />
        <RootStack.Screen name="Description" component={DescriptionScreen} />
        <RootStack.Screen name="AddNote" component={AddNoteScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
