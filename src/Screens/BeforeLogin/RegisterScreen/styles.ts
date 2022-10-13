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
  termsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  checkBoxOpacity: {
    height: hp(4),
    width: wp(6),
  },
  checkBoxImg: {
    height: hp(4),
    width: wp(6),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  termText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'black',
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
  RegisterBtn: {
    backgroundColor: 'blue',
    height: hp(5),
    marginHorizontal: wp(4),
    marginTop: hp(4),
    borderRadius: wp(3),
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  bottomText: {
    fontSize: hp(2.1),
    color: 'black',
    fontWeight: 'bold',
  },
  textFieldView: {
    marginHorizontal: wp(4),
    marginTop: hp(3),
  },
});
