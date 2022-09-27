import {View} from 'react-native';

//user-define import files
import {styles} from './styles';

const Row = ({children}: any) => {
  return <View style={styles.container}>{children}</View>;
};

export default Row;
