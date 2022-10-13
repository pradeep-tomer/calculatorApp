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
    width: '46%',
    // height: hp(30),
    marginHorizontal: wp(2),
    marginVertical: hp(0.8),
    padding: wp(1),
    borderRadius: wp(4),
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(3),
    marginHorizontal: wp(2),
  },
});
