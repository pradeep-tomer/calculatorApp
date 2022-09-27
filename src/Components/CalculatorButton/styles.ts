import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    flex: 1,
    height: hp(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: wp(0.6),
    borderRightWidth: wp(0.6),
    borderColor: 'grey',
  },
  text: {
    color: 'black',
    fontSize: hp(3.5),
  },
});
