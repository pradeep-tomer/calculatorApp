import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputText: {
    marginHorizontal: wp(8),
    marginVertical: hp(1),
    borderRadius: wp(12),
    paddingLeft: wp(4),
    borderWidth: wp(0.5),
    borderColor: 'grey',
    fontSize: hp(3),
    height: hp(8),
    fontWeight: 'bold',
    color: 'black',
  },
  addBtn: {
    position: 'absolute',
    width: wp(18),
    height: hp(9),
    borderRadius: wp(4),
    backgroundColor: '#F2F5FB',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: wp(3),
    right: '5%',
    zIndex: 999,
  },
  addIcon: {
    height: hp(4),
    resizeMode: 'contain',
    width: wp(8),
  },
});
