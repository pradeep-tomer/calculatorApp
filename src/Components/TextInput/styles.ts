import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#fff',
    marginHorizontal: wp(6),
    borderWidth: hp(0.2),
    borderColor: '#E8E8E8',
    height: hp(6),
    borderRadius: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    fontStyle: 'normal',
    fontSize: hp(2.3),
    paddingLeft:wp(3),
    height: hp(20),
  },
});
