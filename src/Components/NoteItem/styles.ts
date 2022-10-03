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
  itemOpacity: {
    backgroundColor: 'rgb(177,142,33)',
    width: '46%',
    height: hp(30),
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    padding: wp(1),
    borderRadius: wp(2.5),
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(2.9),
    marginHorizontal: wp(2),
  },
});
