import {View} from 'react-native';
import React, {ReactNode} from 'react';

//user-define import files
import {styles} from './styles';

const Row = ({children}: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Row;
