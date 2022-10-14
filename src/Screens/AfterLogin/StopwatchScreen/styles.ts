import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stopwatchView: {
    alignItems: 'center',
    marginTop: hp(4),
  },
  scrollView:{
    marginTop: hp(6)
  },
  BtnText: {
    color: '#C58523',
    fontSize: hp(2.5),
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
    color: 'rgb(197,157,89)',
    fontWeight: 'bold',
    fontSize: hp(2.5),
  },
  lapView: {
    flexDirection: 'row',
    marginHorizontal: wp(3.5),
    height: hp(10),
    alignItems: 'center',
    marginVertical: hp(0.5),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#F8F2EA',
  },
  lapCount: {
    height: hp(5),
    width: wp(9.5),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.7),
    borderColor: 'rgb(197,157,89)',
  },
  lapTimeText: {
    flex: 1,
    textAlign: 'right',
    color: 'rgb(77,71,67)',
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
    height: hp(16),
    width: wp(30),
    alignSelf: 'center',
    borderRadius: wp(15),
    justifyContent: 'center',
    borderWidth: wp(1.5),
    borderColor: 'rgb(183,129,45)',
  },
  clockInnerView: {
    backgroundColor: 'rgb(183,129,45)',
    height: hp(1),
    width: wp(15),
    borderRadius: wp(1),
  },
});

export const options = {
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: hp(9),
    color: '#4B4640',
    fontWeight: 'bold',
  },
};
