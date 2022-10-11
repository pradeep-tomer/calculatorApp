import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp(4),
    marginTop: hp(6),
  },
  inputLabel: {
    marginHorizontal: wp(6),
    fontWeight: 'bold',
    fontSize: hp(2),
    marginTop: hp(3),
  },
  inputField: {
    textAlignVertical: 'top',
    fontSize: hp(3),
  },
  backIcon: {
    height: hp(6),
    resizeMode: 'contain',
    width: wp(10),
  },
  backBtnOpacity: {
    height: hp(6),
    justifyContent: 'center',
    marginTop: hp(3),
    width: wp(10),
    marginLeft: wp(3),
  },
});
