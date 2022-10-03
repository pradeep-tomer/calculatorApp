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
    color:'black'
  },
  addBtn: {
    position: 'absolute',
    width: wp(20),
    height: hp(10),
    borderRadius: wp(10),
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: wp(3),
    right: '2%',
    zIndex: 999,
  },
});
