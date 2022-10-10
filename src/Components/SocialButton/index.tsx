import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

//user-define Import files
import {SocialBtnType} from '../../Common';
import {styles} from './styles';

export const SocialButton = (props: SocialBtnType) => {
  const {title, style, disabled, onPress, icon} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.SocialBtnOpacity, style]}>
      <Image style={styles.signInImage} resizeMode="contain" source={icon} />
      <Text style={styles.socialText}>{title}</Text>
    </TouchableOpacity>
  );
};
