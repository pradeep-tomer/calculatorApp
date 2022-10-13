import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp(4),
    color: 'black',
    marginTop: hp(4),
  },
  textFieldView: {
    marginHorizontal: wp(4),
    marginTop: hp(3),
  },
  labelText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp(2.3),
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
  inputField: {
    flex: 1,
    fontSize: hp(2.5),
  },
  btn: {
    backgroundColor: 'blue',
    height: hp(5),
    marginHorizontal: wp(4),
    marginTop: hp(3),
    borderRadius: wp(4),
  },
});
