import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: wp(0),
  },
  BtnText: {
    color: 'orange',
    fontSize: hp(2.2),
    fontWeight: 'bold',
  },
  bottomBtnView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lapCountText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: hp(2.5),
  },
  lapView: {
    flexDirection: 'row',
    marginHorizontal: wp(3.5),
    height: hp(10),
    alignItems: 'center',
  },
  lapCount: {
    height: hp(5),
    width: wp(10),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.6),
    borderColor: 'orange',
  },
  lapTimeText: {
    flex: 1,
    textAlign: 'right',
    color: 'black',
    fontSize: hp(4),
  },
  btnOpacity: {
    flex: 1,
    backgroundColor: '#fff',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  clockView: {
    marginTop: hp(8),
    height: hp(21),
    width: wp(40),
    alignSelf: 'center',
    borderRadius: wp(20),
    justifyContent: 'center',
    borderWidth: wp(1.5),
    borderColor: 'orange',
  },
  clockInnerView: {
    backgroundColor: 'orange',
    height: hp(1),
    width: wp(18),
    borderRadius: wp(1),
  },
});

export const options = {
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: hp(6),
    color: 'black',
    fontWeight: 'bold',
  },
};
