import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eab676',
    justifyContent: 'flex-end',
  },
  valueText: {
    color: '#fff',
    fontSize: hp(6),
    textAlign: 'right',
    marginRight: wp(2),
    backgroundColor: 'green',
  },
});
