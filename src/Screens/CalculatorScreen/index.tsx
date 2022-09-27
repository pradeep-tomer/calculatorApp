import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';

//user-define import files
import Row from '../../Components/Row';
import CalculatorButton from '../../Components/CalculatorButton';
import {styles} from './styles';
import calculator, {initialState} from '../../CalculatorLogic';

const CalculatorScreen = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    setData(initialState);
  }, []);

  const HandleTap = (type: string, value?: number | string) => {
    const res = calculator(type, value, data);
    setData((prev: any) => ({...prev, ...res}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>
        {parseFloat(data?.currentValue).toLocaleString()}
      </Text>
      <Text style={styles.valueText}>{data?.currentValue}</Text>
      <Row>
        <CalculatorButton
          title="AC"
          onPress={() => {
            HandleTap('clear');
          }}
        />
        <CalculatorButton
          title="+/-"
          onPress={() => {
            HandleTap('posneg');
          }}
        />
        {/* <CalculatorButton title={`+${'\n'}-`} onPress={() => {}} /> */}
        <CalculatorButton
          title="%"
          onPress={() => {
            HandleTap('percentage');
          }}
        />
        <CalculatorButton
          title="/"
          onPress={() => {
            HandleTap('operator', '/');
          }}
        />
      </Row>
      <Row>
        <CalculatorButton
          title="7"
          onPress={() => {
            HandleTap('number', 7);
          }}
        />
        <CalculatorButton
          title="8"
          onPress={() => {
            HandleTap('number', 8);
          }}
        />
        <CalculatorButton
          title="9"
          onPress={() => {
            HandleTap('number', 9);
          }}
        />
        <CalculatorButton
          title="×"
          onPress={() => {
            HandleTap('operator', '*');
          }}
        />
      </Row>
      <Row>
        <CalculatorButton
          title="4"
          onPress={() => {
            HandleTap('number', 4);
          }}
        />
        <CalculatorButton
          title="5"
          onPress={() => {
            HandleTap('number', 5);
          }}
        />
        <CalculatorButton
          title="6"
          onPress={() => {
            HandleTap('number', 6);
          }}
        />
        <CalculatorButton
          title="-"
          onPress={() => {
            HandleTap('operator', '-');
          }}
        />
      </Row>
      <Row>
        <CalculatorButton
          title="1"
          onPress={() => {
            HandleTap('number', 1);
          }}
        />
        <CalculatorButton
          title="2"
          onPress={() => {
            HandleTap('number', 2);
          }}
        />
        <CalculatorButton
          title="3"
          onPress={() => {
            HandleTap('number', 3);
          }}
        />
        <CalculatorButton
          title="+"
          onPress={() => {
            HandleTap('operator', '+');
          }}
        />
      </Row>
      <Row>
        <CalculatorButton
          title="0"
          onPress={() => {
            HandleTap('number', 0);
          }}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CalculatorButton
            title="."
            onPress={() => {
              HandleTap('operator', '.');
            }}
          />
          <CalculatorButton
            title="="
            onPress={() => {
              HandleTap('equal', '=');
            }}
          />
        </View>
      </Row>
    </View>
  );
};

export default CalculatorScreen;
