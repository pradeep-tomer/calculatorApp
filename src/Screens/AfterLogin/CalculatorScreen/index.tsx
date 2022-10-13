import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

//user-define import files
import Row from '../../../Components/Row';
import CalculatorButton from '../../../Components/CalculatorButton';
import {styles} from './styles';
import {convertToReArrangedValue} from '../../../Common/calculatorLogic';

const CalculatorScreen = () => {
  const [currentValue, setCurrentValue] = useState<any>([]);
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

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
        const data: Array<string | number> = [];
        for (var i = 0; i < currentValue.length - 1; i++) {
          data.push(currentValue[i]);
        }
        data.push(previousNum);
        setCurrentValue((prev: Array<string>) => [...data]);
      } else {
        if (currentValue[0] == null) {
          setCurrentValue(['0.']);
        }
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
            currentValue[index] != '/' &&
            currentValue[index] != '%'
          ) {
            const data = [];
            const n = JSON.parse(currentValue[index] + value);
            for (var i = 0; i < currentValue.length - 1; i++) {
              data.push(currentValue[i]);
            }
            data.push(n);
            setCurrentValue([...data]);
          } else setCurrentValue((prev: Array<string>) => [...prev, value]);
        } else {
          if (currentValue[0] == 0 && currentValue.length == 1) {
            setCurrentValue([value]);
            return;
          }
          const data: Array<string> = [];
          const previousNum = JSON.stringify(currentValue[index]) + value;
          const num = JSON.parse(previousNum);
          for (var i = 0; i < currentValue.length - 1; i++) {
            data.push(currentValue[i]);
          }
          data.push(num);
          setCurrentValue([...data]);
        }
      }
      if (type == 'operator') {
        if (typeof currentValue[index] == 'string') {
          const data: Array<number | string | undefined> = [];
          for (var i = 0; i < currentValue.length - 1; i++) {
            data.push(currentValue[i]);
          }
          data.push(value);
          setCurrentValue([...data]);
        } else {
          setCurrentValue((prev: Array<string>) => [...prev, value]);
        }
      }
    } else {
      if (type == 'number') setCurrentValue([value]);
      if (type == 'operator' && value == '-') setCurrentValue(['0', value]);
    }
  };

  const clear = () => {
    setCurrentValue([null]);
    setExpression('');
    setResult(null);
  };

  const equal = () => {
    var exp: string = '';
    currentValue.map((item: number | string, index: number) => {
      exp = exp + item;
    });
    const res = convertToReArrangedValue(exp);
    setResult(res);
  };

  const percent = () => {
    if (!(currentValue.length == 0))
      setCurrentValue((prev: Array<string>) => [...prev, '%']);
    if (currentValue.length == 1) {
      const res = currentValue[0] / 100;
      setResult(res);
    }
  };

  const posNeg = () => {
    if (result != null) setResult(result * -1);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.1, y: 0.75}}
        colors={['#DDA550', '#CA9F5D', '#BD9961']}
        style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.valueText}>{expression}</Text>
        {!(result == null) ? (
          <Text style={styles.valueText}>{result.toLocaleString()}</Text>
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
