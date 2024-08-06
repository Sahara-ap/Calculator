import { buttonData } from 'src/App/constants/buttons';
import { NBSP_JS } from './constants/nbsp.constant';

export const convertToRPN = (userExpression: string) => {
  const userExpressionRange = userExpression.split(' ');
  const operatorsRating = buttonData.operatorsRating;
  // console.log(operatorsRating)
  // type TOperator = keyof IRating
  type TOperator = keyof typeof operatorsRating
  const stack: TOperator[] = [];
  let queue = '';

  // interface IRating {
  //   '+': number;
  //   '-': number;
  //   '/': number;
  //   '*': number;
  //   '√': number;
  //   '(': number;
  //   ')': number;
  //   '%': number;
  // }
  // type TOperator = '+' | '-' | '/' | '*' | '(' | ')' | '%' | '√';
  // const operatorsRating: IRating = {
  //   '+': 1,
  //   '-': 1,
  //   '/': 2,
  //   '*': 2,
  //   '√': 10,
  //   '(': -10,
  //   ')': -20,
  // };
  // const {operatorsRating}: IRating = buttonData ;
  // const {buttonCategories} = buttonData;
  const unaryOperatorList = buttonData.buttonsList.filter((item) => item.isUnary).map((item) => item.value);

  userExpressionRange.forEach((value: string) => {
    const isNumber = !isNaN(Number(value));
    const isOperator = isNaN(Number(value));

    if (isNumber) {
      // если число -->  добавить  в очередь сразу
      queue += `${value}${NBSP_JS}`; //сначала число в очередь

      if (
        unaryOperatorList.includes(stack[stack.length - 1]) &&
        stack.length > 0
      ) {
        // затем, если верхний оператор в стэке является унарным
        const lastOperatorInStack = stack.pop() as TOperator;
        queue += `${lastOperatorInStack}${NBSP_JS}`; //унарный оператор --> в очередь
      }
    }

    if (isOperator) {
      // если оператор или скобка,
      const operator = value as TOperator;

      if (stack.length === 0) {
        //при этом стэк пустой --> пушим в стэк
        stack.push(operator);
      } else if (stack.length > 0) {
        // если оператор или скобка, при этом стэк имеет хотя бы 1 элемент
        const topStackIndex = stack.length - 1;
        const topOperatorInStack = stack[topStackIndex];

        if (operator === '(') {
          stack.push(operator);
        }

        if (
          operator in operatorsRating &&
          operator !== '(' &&
          operator !== ')' &&
          // operator !== '%' &&
          // topOperatorInStack !== '%' &&
          operatorsRating[operator] <= operatorsRating[topOperatorInStack]
        ) {
          if (unaryOperatorList.includes(stack[stack.length - 1])) {
            const lastOperatorInStack = stack.pop() || '';
            queue += `${lastOperatorInStack}${NBSP_JS}`; //если верхний в стэке - унарный, то в очередь сразу
          }

          const lastOperatorInStack = stack.pop() as TOperator;
          queue += `${lastOperatorInStack}${NBSP_JS}`; //следующий оператор в стэке за унарным автоматом в очередь

          stack.push(operator); //итого если унарник - первый в очередь, затем приоритетный из стэка --> в очередь, в конце оператор из инпута в стэк.
        }

        if (
          operator in operatorsRating &&
          operator !== '(' &&
          operator !== ')' &&
          // operator !== '%' &&
          // topOperatorInStack !== '%' &&
          operatorsRating[operator] > operatorsRating[topOperatorInStack]
        ) {
          stack.push(operator);
        }

        if (operator === ')') {
          while (stack[stack.length - 1] !== '(') {
            //перекидываем из стэка операторы по одному в очередь пока не дойдем до открывающей скобки

            queue += `${stack[stack.length - 1]}${NBSP_JS}`; //здесь перекидываем
            stack.pop(); // здесь удаляем из стека
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
