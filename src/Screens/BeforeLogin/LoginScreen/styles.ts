import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(95),
  },
  headerText: {
    textAlign: 'center',
    marginTop: hp(5),
    fontSize: hp(4),
    color: 'black',
    fontWeight: 'bold',
  },
  inputFieldView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(3),
    borderWidth: wp(0.3),
    height: hp(6),
    borderColor: '#E8E8E8',
    marginTop: hp(0.4),
  },
  inputIcon: {
    height: hp(3),
    resizeMode: 'contain',
    width: wp(6),
    marginHorizontal: wp(1.5),
    marginLeft: wp(3),
  },
  labelText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp(2.3),
  },
  inputField: {
    flex: 1,
    fontSize: hp(2.5),
  },
  loginBtn: {
    backgroundColor: 'blue',
    height: hp(5),
    marginHorizontal: wp(4),
    marginTop: hp(4),
    borderRadius: wp(3),
  },
  forgotView: {
    alignItems: 'flex-end',
    marginTop: hp(0.5),
    marginHorizontal: wp(4),
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  loginWithText: {
    color: '#4B4F54',
    fontWeight: 'bold',
    fontStyle: 'normal',
    alignSelf: 'center',
    paddingHorizontal: hp(3),
  },
  loginWithLine: {
    backgroundColor: '#eff2ef',
    height: hp(0.2),
    flex: 1,
    alignSelf: 'center',
  },
  bottomText: {
    fontSize: hp(2.1),
    color: 'black',
    fontWeight: 'bold',
  },
  socialBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(6),
  },
  loginWithView: {
    flexDirection: 'row',
    marginHorizontal: hp(2),
    marginVertical: hp(4),
  },
  textFieldView: {
    marginHorizontal: wp(4),
    marginTop: hp(3),
  },
});
