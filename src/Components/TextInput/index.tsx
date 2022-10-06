import {TextInput} from 'react-native';
import React from 'react';

//user-define Import files
import {styles} from './styles';
import {TextInputType} from '../../Common';

export const EditText = (props: TextInputType) => {
  const {
    placeholder,
    secureTextEntry,
    placeholderTextColor,
    multiline,
    style,
    onChangeText,
  } = props;

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor}
      multiline={multiline}
      style={[styles.inputField, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};
