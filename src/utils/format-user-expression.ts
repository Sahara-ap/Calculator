import { NBSP_JS } from './constants/nbsp.constant';

export const formatUserExpression = (userInput: string) => {
  const result = userInput
    .replace(/,/g, '.') //меняет все запятые на точки
    .replace(/[^0-9*/+\-()%.√]/g, '') //все что не в квадратных скобках удаляется
    .replace(/^[*/+%]+/, '') //если выражение начинается с того что в [], то символы из [] удаляются
    .replace(/√+[*/+\-%]+/, '√') //если выражение начинается с √[], то символы из [] удаляются
    .replace(/[*/+\-.]{2,}/g, (match) => match[0]) //задвоенные операторы кроме процента превращаются в первый указанный
    .replace(/%{2,}/g, (match) => match[0]) //задвоенные проценты превращаются в первый указанный
    .replace(/[*/+\-()%√]/g, (match) => `${NBSP_JS}${match}${NBSP_JS}`) //выставляет пробелы до и после операторов
    .replace(/^0{2,}/g, '0') //убирает несколько нулей в начале выражения
    .replace(/^(0[1-9])/, (match) => match.replace('0', ''))
    .replace(/(\s+0+[1-9])/g, (match) => match.replaceAll('0', '')) //убирает несколько нулей в начале чисел
    .replace(/(\w+\.)+/g, (match) => {
      //убирает лишние точки в числе
      const [firstElement, lastElement] = match.replace('.', '@').split('@');
      const lastWithoutDots = lastElement?.replace(/\./g, '');
      return `${firstElement}.${lastWithoutDots}`;
    })
    .replace(/\s+/g, ' ') //заменяет сдвоенные пробелы на один
    .trim();

  // .replace(/\*|\/|\+|-|\(|\)/g, (match) => ` ${match} `)
  return result;
};
