export const formatUserExpression = (userInput: string) => {
  const result = userInput
    .replace(/,/g, '.')
    .replace(/^[*/+\-%]+/, '')
    .replace(/[^0-9*/+\-()%.√]/g, '')
    .replace(/[*/+\-%.]{2,}/g, (match) => match[0])
    .replace(/^0{2,}/, '0')
    .replace(/^(0[1-9])/, (match) => match.replace('0', ''))
    .replace(/(\w+\.)+/g, (match) => {
      const [firstElement, lastElement] = match.replace('.', '@').split('@');
      const lastWithoutDots = lastElement?.replace(/\./g, '');
      return `${firstElement}.${lastWithoutDots}`;
    })
    .replace(/[*/+-()%.√]/g, (match) => ` ${match} `)
    .replace(/\s+/g, ' ')
    .trim();

  return result;
};
