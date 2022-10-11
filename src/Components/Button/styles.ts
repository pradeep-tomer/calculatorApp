import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  btnOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#C58523',
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
});
