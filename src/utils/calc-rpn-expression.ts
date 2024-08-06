interface ILocalMath {
  '+': () => number;
  '-': () => number;
  '/': () => number;
  '*': () => number;
  '√': () => number;
}

function calc<T extends keyof ILocalMath>({leftOperand,rightOperand,operator,}: {
  leftOperand: number;
  rightOperand?: number;
  operator: T;
}) {
  const localMath: ILocalMath = {
    '+': () => Number(leftOperand) + Number(rightOperand),
    '-': () => Number(leftOperand) - Number(rightOperand),
    '/': () => Number(leftOperand) / Number(rightOperand),
    '*': () => Number(leftOperand) * Number(rightOperand),
    '√': () => Math.sqrt(Number(leftOperand)),
  };
  return localMath[operator]();
}

interface IUnaryOperator {
  sqrt: '√';
}
const unaryOperatorMap: IUnaryOperator = {
  sqrt: '√',
};
const unaryOperatorList = Object.values(unaryOperatorMap);

export const calcRpnExpression = (rpnExpression: string) => {
  const stack: number[] = [];
  const rpnRange = rpnExpression.split(' ');

  rpnRange.forEach((value) => {
    const isNumber = !isNaN(Number(value));
    const isBinaryOperator = isNaN(Number(value)) && !unaryOperatorList.includes(value);
    const isUnaryOperator = unaryOperatorList.includes(value);

    switch (true) {
      case isBinaryOperator && stack.length >= 2: {
        const operator = value as keyof ILocalMath;
        const rightOperand = stack.pop();
        const leftOperand = stack.pop();

        if (leftOperand && rightOperand) {
          const result = calc({leftOperand, rightOperand, operator});
          stack.push(result);
        }
        break;
      }

      case isUnaryOperator && stack.length >= 1: {
        const lastOperand = stack.pop() as number;
        const operator = value as keyof ILocalMath;
        const mathResult = calc({leftOperand: lastOperand, operator});
        stack.push(mathResult);
        break;
      }

      case isNumber: {
        stack.push(Number(value));
      }
    }
  });

  return stack[0];
};
