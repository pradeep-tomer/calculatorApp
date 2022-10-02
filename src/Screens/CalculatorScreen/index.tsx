import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';

//user-define import files
import Row from '../../Components/Row';
import CalculatorButton from '../../Components/CalculatorButton';
import {styles} from './styles';

const CalculatorScreen = () => {
  const [currentValue, setCurrentValue] = useState<any>([0]);
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number>(0);
  console.log('Current value: ', currentValue);
  console.log('Result: ', result);

  useEffect(() => {
    var exp: string = '';
    currentValue.map((item: any, index: number) => {
      exp = exp + item;
    });
    setExpression(exp);
  }, [currentValue]);

  const point = () => {
    const index = currentValue.length - 1;
    if (typeof currentValue[index] == 'string') {
      if (
        currentValue[index] == '+' ||
        currentValue[index] == '-' ||
        currentValue[index] == '×' ||
        currentValue[index] == '/'
      ) {
        setCurrentValue((prev: any) => [...prev, "0."]);
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
    if (currentValue[0]) {
      const index = currentValue.length - 1;
      if (type == 'number') {
        if (typeof currentValue[index] == 'string') {
          if (
            currentValue[index] != '+' &&
            currentValue[index] != '-' &&
            currentValue[index] != '×' &&
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
    }
  };
  const clear = () => {
    setCurrentValue([0]);
    setExpression('');
    setResult(0);
  };
  const Result = () => {
    var first: number = 0;
    var operator = '';
    currentValue.map((item: any, index: number) => {
      if (index == 0) {
        first = item;
      }
      if (typeof item == 'number') {
        if (operator) {
          if (operator == '+') {
            first = first + item;
          }
          if (operator == '×') {
            first = first * item;
          }
          if (operator == '-') {
            first = first - item;
          }
          if (operator == '/') {
            first = first / item;
          }
        }
      } else {
        if (item == '+') {
          operator = '+';
        }
        if (item == '-') {
          operator = '-';
        }
        if (item == '×') {
          operator = '×';
        }
        if (item == '/') {
          operator = '/';
        }
      }
    });
    setResult(first);
  };

  const posNeg = () => {
    setResult(result * -1);
  };
  const percentage=()=>{
    console.log("Percentage Press")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>
        {expression}
        {/* {parseFloat(data?.currentValue).toLocaleString()} */}
      </Text>
      {result ? <Text style={styles.valueText}>{result}</Text> : null}
      <Row>
        <CalculatorButton title="AC" onPress={clear} />
        <CalculatorButton title="+/-" onPress={posNeg} />
        {/* <CalculatorButton title={`+${'\n'}-`} onPress={() => {}} /> */}
        <CalculatorButton
          title="%"
          onPress={percentage}
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
            HandleTap('operator', '×');
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
          <CalculatorButton title="=" onPress={Result} />
        </View>
      </Row>
    </View>
  );
};

export default CalculatorScreen;
