import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Stopwatch} from 'react-native-stopwatch-timer';

//user-define Import files
import Button from '../../../Components/Button';
import {options, styles} from './styles';
import {lapDataType} from '../../../Common';

const StopwatchScreen = () => {
  const [time, setTime] = useState<string>('');
  const [isStopwatchStart, setIsStopwatchStart] = useState<boolean>(false);
  const [resetStopwatch, setResetStopwatch] = useState<boolean>(false);
  const [lapRecord, setLapRecord] = useState<lapDataType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [lapStatus, setLapStatus] = useState<boolean>(true);
  const [clearStatus, setClearStatus] = useState<boolean>(true);
  const [deg, setDeg] = useState<number>(78);

  useEffect(() => {
    setDeg(deg + 6);
  }, [time]);

  const Clear = () => {
    setIsStopwatchStart(false);
    setResetStopwatch(true);
    setLapRecord([]);
    setCount(0);
    setLapStatus(true);
    setDeg(84);
    setClearStatus(true);
  };
  const Lap = () => {
    const record = [];
    const data = {
      count: count + 1,
      time,
    };
    setCount(count + 1);
    record.push(data);
    setLapRecord((prev: any) => [...prev, data]);
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={[
            styles.clockView,
            {
              transform: [{rotate: deg + 'deg'}],
            },
          ]}>
          <View style={styles.clockInnerView} />
        </View>
        <View style={styles.stopwatchView}>
          <Stopwatch
            laps
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            getTime={(time: string) => {
              setTime(time);
            }}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          {lapRecord.map((item: lapDataType, index: number) => {
            return (
              <View key={index} style={styles.lapView}>
                <View style={styles.lapCount}>
                  <Text style={styles.lapCountText}>{item?.count}</Text>
                </View>
                <Text style={styles.lapTimeText}>{item?.time}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.bottomBtnView}>
        <Button
          disabled={clearStatus}
          style={styles.btn}
          title="CLEAR"
          onPress={Clear}
        />
        <Button
          style={styles.btn}
          disabled={lapStatus}
          title="LAP"
          onPress={Lap}
        />
        <TouchableOpacity
          style={styles.btnOpacity}
          onPress={() => {
            setIsStopwatchStart(!isStopwatchStart);
            setResetStopwatch(false);
            setLapStatus(!lapStatus);
            setClearStatus(false);
          }}>
          <Text style={styles.BtnText}>
            {!isStopwatchStart ? 'START' : 'STOP'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StopwatchScreen;
