import {View, TextInput} from 'react-native';
import React from 'react';

//user-define Import files
import {styles} from './styles';

export const EditText = (props: any) => {
  const {value, placeholder, containerStyle, onChangeText} = props;
  return (
    <View style={[styles.inputView, containerStyle]}>
      <TextInput
        value={value}
        style={styles.inputField}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
