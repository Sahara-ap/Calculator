export const convertToRPN = (userExpression: string) => {
  const userExpressionRange = userExpression.split(' ');
  const stack: TOperator[] = [];
  let queue = '';

  interface IRating {
    '+': number;
    '-': number;
    '/': number;
    '*': number;
  }
  type TOperator = '+' | '-' | '/' | '*' | '(' | ')' | '%' | '√(' | '√'
  // type TOperatorsRating = '+' | '-' | '/' | '*'
  const operatorsRating: IRating = {
    '+': 1,
    '-': 1,
    '/': 2,
    '*': 2,
  };

  interface IUnaryOperator {
    sqrt: '√';
  }
  const unaryOperatorMap: IUnaryOperator = {
    sqrt: '√',
  };


  userExpressionRange.forEach((value: string) => {
    const isNumber = !isNaN(Number(value));
    const isOperator = isNaN(Number(value));
    const unaryOperatorList = Object.values(unaryOperatorMap);


    if (isNumber) {
      // если число -->  добавить  в очередь
      if (unaryOperatorList.includes(stack[stack.length - 1])) { // если верхний оператор в стэке является унарным
        queue += stack.pop();
      }
      queue += `${value} `;
    }
    if (isOperator) {
      // если оператор или скобка,
      const operator = value as TOperator;
      if(operator === '√') {
        stack.push(`${operator}(`);
      }

      if (stack.length === 0) {
        //при этом стэк пустой --> пушим в стэк
        stack.push(operator);
      } else if (stack.length > 0) {
        // если оператор или скобка, при этом стэк имеет хотя бы 1 элемент
        const topStackIndex = stack.length - 1;
        const topOperatorInStack = stack[topStackIndex];

        // if (operator === '(' || topOperatorInStack === '(') {  возможно правое условие избыточно
        if (operator === '(') {
          stack.push(operator);
        }

        if (
          operator in operatorsRating
          && operator !== '(' && operator !== ')' && operator !== '%' &&
          topOperatorInStack !== '(' && topOperatorInStack !== ')' && topOperatorInStack !== '%' &&
          operatorsRating[operator] <= operatorsRating[topOperatorInStack]
        ) {
          queue += `${topOperatorInStack} `;
          stack.pop();
          const openParenthesisIndex = stack.lastIndexOf('(');
          if (openParenthesisIndex >= 0) {
            const stackOperatorsNextOpenParenthesis = stack
              .splice(openParenthesisIndex + 1)
              .reverse()
              .join('');
            queue += `${stackOperatorsNextOpenParenthesis} `;
          }
          stack.push(operator);
        }

        if (
          operator in operatorsRating
          && operator !== '(' && operator !== ')' && operator !== '%' &&
          topOperatorInStack !== '(' && topOperatorInStack !== ')' && topOperatorInStack !== '%' &&
           operatorsRating[operator] > operatorsRating[topOperatorInStack]
        ) {
          stack.push(operator);
        }

        if (operator === ')') {
          while (stack[stack.length - 1] !== '(') {
            //перекидываем из стэка операторы по одному в очередь пока не дойдем до открывающей скобки

            queue += `${stack[stack.length - 1]} `; //здесь перекидываем
            stack.pop(); // здесь удаляем из стека
          }
          stack.pop(); // открывающую скобку (дошли до нее) просто удаляем из стэка
        }
      }
    }
  });

  if (stack.length > 0) {
    while (stack.length > 0) {
      queue += `${stack[stack.length - 1]} `;
      stack.pop();
    }
  }

  const result = queue.replace(/\s+/g, ' ').trimEnd();
  return result;
};
