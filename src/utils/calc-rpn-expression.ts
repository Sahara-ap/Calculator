interface ILocalMath {
  '+': () => number;
  '-': () => number;
  '/': () => number;
  '*': () => number;
}

function calc<T extends keyof ILocalMath>(a: number, b: number, operator: T) {
  const localMath: ILocalMath = {
    '+': () => Number(a) + Number(b),
    '-': () => Number(a) - Number(b),
    '/': () => Number(a) / Number(b),
    '*': () => Number(a) * Number(b),
  };
  return localMath[operator]();
}

export const calcRpnExpression = (rpnExpression: string) => {
  const stack: number[] = [];
  const rpnRange = rpnExpression.split(' ');

  rpnRange.forEach((value) => {
    const isNumber = !isNaN(Number(value));
    const isOperator = isNaN(Number(value));

    switch (true) {
      case isOperator && stack.length >= 2: {
        const operator = value as keyof ILocalMath;
        const rightOperand = stack.pop();
        const leftOperand = stack.pop();

        if (leftOperand && rightOperand) {
          const result = calc(leftOperand, rightOperand, operator);
          stack.push(result);
        }
        break;
      }

      case isNumber:
        stack.push(Number(value));
    }
  });

  return stack[0];
};
