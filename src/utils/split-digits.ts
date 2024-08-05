import { NBSP_JS } from './constants/nbsp.constant';

//adds spaces between digits groups
export const splitDigits = (value: string): string => {
  const isNegative = value.startsWith('-');
  const pureValue = isNegative ? value.slice(1) : value;

  if (pureValue.length <= 3) {
    return isNegative ? `-${pureValue}` : pureValue;
  }
  const firstElement = pureValue.slice(0, -3);
  const lastElement = pureValue.slice(-3);

  return isNegative
    ? `-${splitDigits(firstElement)}${NBSP_JS}${lastElement}`
    : `${splitDigits(firstElement)}${NBSP_JS}${lastElement}`;
};
