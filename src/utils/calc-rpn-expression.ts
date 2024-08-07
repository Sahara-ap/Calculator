import { ILocalMath, IPartialOperator, IUnaryOperator } from './types/calc.interface';

export const calcRpnExpression = (rpnExpression: string) => {
  const stack: number[] = [];
  const rpnRange = rpnExpression.split(' ');

  const unaryOperatorMap: IUnaryOperator = {sqrt: '√'};
  const unaryOperatorList = Object.values(unaryOperatorMap);

  const partialOperatorMap: IPartialOperator = {percent: '%'};
  const partialOperatorList = Object.values(partialOperatorMap);

  const calc = ({
    leftOperand = 0,
    rightOperand,
    operator,
  }: {
    leftOperand?: number | string;
    rightOperand: number | string;
    operator: keyof ILocalMath;
  }) => {
    const localMath: ILocalMath = {
      '+': () => Number(leftOperand) + Number(rightOperand),
      '-': () => (Number(leftOperand) ?? 0) - Number(rightOperand),
      '/': () => Number(leftOperand) / Number(rightOperand),
      '*': () => Number(leftOperand) * Number(rightOperand),
      '√': () => Math.sqrt(Number(rightOperand)),
      '%': () => (Number(leftOperand) * Number(rightOperand)) / 100,
    };
    return localMath[operator]();
  };

  rpnRange.forEach((value) => {
    const isNumber = !isNaN(Number(value));
    const isUnaryOperator = unaryOperatorList.includes(value);
    const isPartialOperator = partialOperatorList.includes(value);
    const isBinaryOperator =
      isNaN(Number(value)) && !isUnaryOperator && !isPartialOperator;

    switch (true) {
      case isBinaryOperator && stack.length >= 1: {
        const operator = value as keyof ILocalMath;
        const rightOperand = stack.pop() || 0;
        const leftOperand = stack.pop() || 0;

        const mathResult = calc({ leftOperand, rightOperand, operator });
        stack.push(mathResult);
        break;
      }

      case isUnaryOperator && stack.length >= 1: {
        const lastOperand = stack.pop() as number;
        const operator = value as keyof ILocalMath;
        const mathResult = calc({ rightOperand: lastOperand, operator });
        stack.push(mathResult);
        break;
      }
      case isPartialOperator && stack.length >= 2: {
        const operator = value as keyof ILocalMath;
        const rightOperand = stack.pop();
        const leftOperand = stack.slice(-1).join('');

        if (leftOperand && rightOperand) {
          const mathResult = calc({ leftOperand, rightOperand, operator });
          stack.push(mathResult);
        }
        break;
      }

      case isNumber: {
        stack.push(Number(value));
      }
    }
  });

  return stack[0];
};
