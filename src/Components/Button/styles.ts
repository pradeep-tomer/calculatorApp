import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  btnOpacity: {
    backgroundColor: 'blue',
    marginHorizontal: wp(4),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  btnText: {
    color: '#DE820D',
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
});
