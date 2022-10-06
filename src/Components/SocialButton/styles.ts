import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  SocialBtnOpacity: {
    borderWidth: hp(0.2),
    borderColor: '#E8E8E8',
    width: wp(40),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: hp(2),
    height: hp(7),
  },
  signInImage: {
    height: hp(4),
    width: wp(10),
  },
  socialText: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: hp(2.3),
    marginLeft: hp(0.2),
  },
});
