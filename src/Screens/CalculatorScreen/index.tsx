import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

//user-define import files
import Row from '../../Components/Row';
import CalculatorButton from '../../Components/CalculatorButton';
import {styles} from './styles';
import {convertToReArragedValue} from '../../Common/calculatorLogic';

const CalculatorScreen = () => {
  const [currentValue, setCurrentValue] = useState<any>([null]);
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number>(-1);
  // console.log('Current value: ', currentValue);
  // console.log('Result: ', result);

  useEffect(() => {
    var exp: string = '';
    if (currentValue[0] != null) {
      currentValue.map((item: string | number, index: number) => {
        exp = exp + item;
      });
      setExpression(exp);
    } else setExpression('0');
  }, [currentValue]);

  const point = () => {
    const index = currentValue.length - 1;
    if (typeof currentValue[index] == 'string') {
      if (
        currentValue[index] == '+' ||
        currentValue[index] == '-' ||
        currentValue[index] == '*' ||
        currentValue[index] == '/' ||
        currentValue[index] == '%'
      ) {
        setCurrentValue((prev: string) => [...prev, '0.']);
      }
    } else {
      if (Number.isInteger(currentValue[index])) {
        const previousNum = JSON.stringify(currentValue[index]) + '.';
        const data: any = [];
        for (var i = 0; i < currentValue.length - 1; i++) {
          data.push(currentValue[i]);
        }
        data.push(previousNum);
        setCurrentValue((prev: any) => [...data]);
      }
    }
  };

  const HandleTap = (type: string, value?: number | string) => {
    if (currentValue[0] != null) {
      const index = currentValue.length - 1;
      if (type == 'number') {
        if (typeof currentValue[index] == 'string') {
          if (
            currentValue[index] != '+' &&
            currentValue[index] != '-' &&
            currentValue[index] != '*' &&
            currentValue[index] != '/'
          ) {
            const data = [];
            const n = JSON.parse(currentValue[index] + value);
            for (var i = 0; i < currentValue.length - 1; i++) {
              data.push(currentValue[i]);
            }
            data.push(n);
            setCurrentValue([...data]);
          } else setCurrentValue((prev: any) => [...prev, value]);
        } else {
          if (currentValue[0] == 0) {
            setCurrentValue([value]);
            return;
          }
          const data: any = [];
          const previousNum = JSON.stringify(currentValue[index]) + value;
          const num = JSON.parse(previousNum);
          for (var i = 0; i < currentValue.length - 1; i++) {
            data.push(currentValue[i]);
          }
          data.push(num);
          setCurrentValue((prev: any) => [...data]);
        }
      }
      if (type == 'operator') {
        if (typeof currentValue[index] == 'string') {
          const data: any = [];
          for (var i = 0; i < currentValue.length - 1; i++) {
            data.push(currentValue[i]);
          }
          data.push(value);
          setCurrentValue((prev: any) => [...data]);
        } else {
          setCurrentValue((prev: any) => [...prev, value]);
        }
      }
    } else {
      if (type == 'number') setCurrentValue([value]);
      if (type == 'operator' && value == '-')
        setCurrentValue((prev: any) => ['0', value]);
    }
  };

  const clear = () => {
    setCurrentValue([null]);
    setExpression('');
    setResult(-1);
  };

  const equal = () => {
    var exp: string = '';
    currentValue.map((item: number | string, index: number) => {
      exp = exp + item;
    });
    const res = convertToReArragedValue(exp);
    setResult(res);
  };

  const percent = () => {
    // const res = currentValue[0] / 100;
    // console.log('Current value: info: ', res);
    // setResult(res);
    // if (currentValue.length == 2) {
    //   const res = currentValue[0] / 100;
    //   console.log('Current value: info: ', res);
    // }
  };

  const posNeg = () => {
    setResult(result * -1);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.1, y: 0.75}}
        colors={['#DDA550', '#CA9F5D', '#BD9961']}
        style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.valueText}>
          {expression}
          {/* {parseFloat(data?.currentValue).toLocaleString()} */}
        </Text>
        {!(result == -1) ? (
          // <Text style={styles.valueText}>{result.toFixed(4)}</Text>
          <Text style={styles.valueText}>
            {parseFloat(result).toLocaleString()}
          </Text>
        ) : null}
      </LinearGradient>

      <Row>
        <CalculatorButton title="AC" onPress={clear} />
        <CalculatorButton title="±" onPress={posNeg} />
        <CalculatorButton title="%" onPress={percent} />
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
          <CalculatorButton title="." onPress={point} />
          <LinearGradient
            style={{flex: 1}}
            start={{x: 0, y: 0.75}}
            colors={['#DDA550', '#CA9F5D', '#BD9961']}>
            <TouchableOpacity onPress={equal} style={styles.btnOpacity}>
              <Text style={styles.btnText}>=</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Row>
    </View>
  );
};

export default CalculatorScreen;
