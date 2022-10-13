export const prioritizingOperator = (operator: string) => {
  switch (operator) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 3;
    case '%':
      return 2;
    default:
      return -1;
  }
};

const calculatingValues = (num1: any, operator: string, num2: number) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return (num1 * num2) / 100;
  }
};

export const convertToReArrangedValue = (val: string) => {
  let operators = [];
  let arrangedValues = '';
  for (var i = 0; i < val.length; i++) {
    if ((val[i] >= '0' && val[i] <= '9') || val[i] == '.') {
      arrangedValues += val[i];
    } else {
      arrangedValues += ' ';
      if (operators.length === 0) {
        operators.push(val[i]);
      } else {
        if (
          prioritizingOperator(val[i]) >
          prioritizingOperator(operators[operators.length - 1])
        ) {
          operators.push(val[i]);
        } else {
          while (
            !(operators.length === 0) &&
            prioritizingOperator(val[i]) <=
              prioritizingOperator(operators[operators.length - 1])
          ) {
            var ch = operators[operators.length - 1];
            operators.pop();
            arrangedValues += ch;
          }
          operators.push(val[i]);
        }
      }
    }
  }
  arrangedValues += ' ';
  while (!(operators.length === 0)) {
    var ch = operators[operators.length - 1];
    arrangedValues += ch;
    operators.pop();
  }
  return calculatingWithReArrangedValue(arrangedValues);
};

const calculatingWithReArrangedValue = function (val: string) {
  var perviousOperator = '';
  var answer = [],
    n,
    result;
  for (var i = 0; i < val.length; i++) {
    if ((val[i] >= '0' && val[i] <= '9') || val[i] == '.') {
      var number = '';
      while (val[i] != ' ') {
        number += val[i];
        i++;
      }
      n = parseFloat(number);
      answer.push(n);
    } else {
      if (answer.length < 2) {
        result = 'INVALID';
        return result;
      } else {
        var num2 = answer[answer.length - 1];
        answer.pop();
        var num1 = answer[answer.length - 1];
        answer.pop();
        if (perviousOperator == '/' && val[i] == '%') {
          var temp: number = num1 * 100 * num2;
          answer.push(temp);
        } else {
          perviousOperator = val[i];
          result = calculatingValues(num1, val[i], num2);
          answer.push(result);
        }
      }
    }
  }
  var finalAns = answer[answer.length - 1];
  answer.pop();
  if (answer.length === 0) {
    return finalAns;
  } else {
    return 'INVALID';
  }
};
