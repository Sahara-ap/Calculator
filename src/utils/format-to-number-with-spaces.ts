import { splitDigits } from './split-digits';

//adds spaces between digits groups
export const formatToNumberWithSpaces = (
  value: number | string
): string => {

  const normalizedValue = value.toString();

  if (normalizedValue.includes('.')) {
    const [beforeDot, afterDot] = normalizedValue.split('.');

    return afterDot.length > 0
      ? `${splitDigits(beforeDot)}.${afterDot}`
      : splitDigits(beforeDot);
  }

  return splitDigits(normalizedValue);
};
