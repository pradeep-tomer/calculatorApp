import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  btn: {
    marginVertical: hp(2),
    marginHorizontal: wp(3),
    height: hp(5),
    borderRadius: wp(4),
    backgroundColor: 'blue',
  },
});
