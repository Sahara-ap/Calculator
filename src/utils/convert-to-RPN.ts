import { buttonData } from 'src/App/constants/buttons';
import { NBSP_JS } from './constants/nbsp.constant';

export const convertToRPN = (userExpression: string) => {
  type TOperator = keyof typeof operatorsRating;

  const operatorsRating = buttonData.operatorsRating;
  const operatorTypes = buttonData.operatorsTypes;
  const unaryOperatorList = operatorTypes.unary;

  const userExpressionRange = userExpression.split(' ');
  const stack: TOperator[] = [];
  let queue = '';

  userExpressionRange.forEach((value: string) => {
    const isNumber = !isNaN(Number(value));
    const isOperator = isNaN(Number(value));

    if (isNumber) {
      queue += `${value}${NBSP_JS}`; //сначала число в очередь

      if (
        unaryOperatorList.includes(stack[stack.length - 1]) &&
        stack.length > 0
      ) {
        // затем, если верхний оператор в стэке является унарным убрать из очереди
        const lastOperatorInStack = stack.pop() as TOperator;
        queue += `${lastOperatorInStack}${NBSP_JS}`; //унарный оператор --> в очередь
      }
    }

    if (isOperator) {
      const operator = value as TOperator;

      if (stack.length === 0) {
        stack.push(operator);
      } else if (stack.length > 0) {
        const topStackIndex = stack.length - 1;
        const topOperatorInStack = stack[topStackIndex];

        if (operator === '(') {
          stack.push(operator);
        }

        if (
          operator in operatorsRating &&
          operator !== '(' &&
          operator !== ')' &&
          operatorsRating[operator] <= operatorsRating[topOperatorInStack]
        ) {
          if (unaryOperatorList.includes(stack[stack.length - 1])) {
            const lastOperatorInStack = stack.pop() || '';
            queue += `${lastOperatorInStack}${NBSP_JS}`; //если верхний в стэке - унарный, то в очередь сразу
          }

          const lastOperatorInStack = stack.pop() as TOperator;
          queue += `${lastOperatorInStack}${NBSP_JS}`; //следующий оператор в стэке за унарным автоматом в очередь

          stack.push(operator);
        }

        if (
          operator in operatorsRating &&
          operator !== '(' &&
          operator !== ')' &&
          operatorsRating[operator] > operatorsRating[topOperatorInStack]
        ) {
          stack.push(operator);
        }

        if (operator === ')') {
          while (stack[stack.length - 1] !== '(') {
            //перекидываем из стэка операторы по одному в очередь пока не дойдем до открывающей скобки
            queue += `${stack[stack.length - 1]}${NBSP_JS}`;
            stack.pop(); // удаляем из стека
          }
          stack.pop(); // открывающую скобку (дошли до нее) просто удаляем из стэка
        }
      }
    }
  });

  //если выражение закончилось, а в стэке есть операторы --> перекинуть все в очередь в обратном порядке (LIFO)
  if (stack.length > 0) {
    queue += stack.splice(0).reverse().join(' ');
  }

  const result = queue.replace(/\s+/g, ' ').trimEnd();
  return result;
};
