export const removeOperatorsAndSpacesFromEnd = (formatUserExpression: string) => {
  const result = formatUserExpression.replace(/[*/+\-% ]+$/, '');

  return result;
};
