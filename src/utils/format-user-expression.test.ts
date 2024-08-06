import { formatUserExpression } from './format-user-expression';

describe('format user expression', () => {
  it('should replace all comas "," with dots "."', () => {
    expect(formatUserExpression('542,54.')).toBe('542.54');
  });

  it('should remove all string letters from expression', () => {
    expect(formatUserExpression('5qw42 rt')).toBe('542');
  });

  it('should remove all operators from start of expression except "√"', () => {
    expect(formatUserExpression('*/542')).toBe('542');
    expect(formatUserExpression('√/542')).toBe('√ 542');
    expect(formatUserExpression('√/ +*542')).toBe('√ 542');
  });

  it('should replace several operators in a row with only the first one', () => {
    expect(formatUserExpression('542++54-+54')).toBe('542 + 54 - 54');
  });

  it('should insert one space before and after each operator in expression', () => {
    expect(formatUserExpression('542+54-54')).toBe('542 + 54 - 54');
    expect(formatUserExpression('1 +2/4 ')).toBe('1 + 2 / 4');
  });

  it('should remove zeros in start of digits', () => {
    expect(formatUserExpression('000542+ 0011 *01001')).toBe('542 + 11 * 1001');
  });

  it('should replace several dots or comas in a row with only one dot', () => {
    expect(formatUserExpression('542,,55,.56.')).toBe('542.5556');
    expect(formatUserExpression('542,,54,.')).toBe('542.54');
  });

  it('should replace spaces among digits', () => {
    expect(formatUserExpression('5   4      2  ')).toBe('542');
  });

  it('should remove all spaces from start and end on expression', () => {
    expect(formatUserExpression('    54+21/45   ')).toBe('54 + 21 / 45');
  });

  it('should format correctly', () => {
    expect(formatUserExpression('√(57/3)+ 0.2')).toBe('√ ( 57 / 3 ) + 0.2');
  });
  it('should format correctly', () => {
    expect(formatUserExpression('1+2*√(16+9)+4')).toBe('1 + 2 * √ ( 16 + 9 ) + 4');
  });
  it('should format correctly', () => {
    expect(formatUserExpression('1+2*√(16+9*10)+4')).toBe('1 + 2 * √ ( 16 + 9 * 10 ) + 4');
  });

});
