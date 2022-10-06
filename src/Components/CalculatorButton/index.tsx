import {Text, TouchableOpacity} from 'react-native';

//user-define Import files
import {styles} from './styles';
import {buttonType} from '../../Common';

const CalculatorButton = (data: buttonType) => {
  const {onPress, title, style} = data;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
