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
  noteView: {
    backgroundColor: 'rgb(177,142,33)',
    marginHorizontal: wp(2),
    borderRadius: wp(6),
    padding: wp(2),
    marginTop: hp(2),
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(4),
  },
});
