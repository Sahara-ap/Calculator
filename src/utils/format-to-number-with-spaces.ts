import { splitDigits } from './split-digits';

//adds spaces between digits groups
export const formatToNumberWithSpaces = (
  value: number | string | undefined
): string | undefined => {
  if (value === undefined) {
    return value;
  }

  const normalizedValue = value.toString();

  if (normalizedValue.includes('.')) {
    const [beforeDot, afterDot] = normalizedValue.split('.');

    return afterDot.length > 0
      ? `${splitDigits(beforeDot)}.${afterDot}`
      : splitDigits(beforeDot);
  }

  return splitDigits(normalizedValue);
};
