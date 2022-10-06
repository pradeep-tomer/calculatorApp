import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

//user-define Import Files
import {buttonType} from '../../Common';
import {styles} from './styles';

const Button = (data: buttonType) => {
  const {title, btnStyle, style, disabled, onPress} = data;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.btnOpacity, style]}>
      <Text style={[styles.btnText, btnStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
