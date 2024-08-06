import { convertToRPN } from './convert-to-RPN';

describe('convert user expression to reverse polish notation one', () => {
  it('should add in queue unary-operator from stack every time when it is followed by a number', () => {
    expect(convertToRPN('1 + 2 * √ 3')).toEqual('1 2 3 √ * +');
    expect(convertToRPN('1 + 2 * √ 3 + 4')).toEqual('1 2 3 √ * 4 + +');
  });

  it('should return "number number binary operator"', () => {
    expect(convertToRPN('1 + 2')).toEqual('1 2 +');
  });

  it('should return "number number operator"', () => {
    expect(convertToRPN('1 + 2')).toEqual('1 2 +');
  });

  it('should return right expression', () => {
    expect(convertToRPN('1 + 2 * √ ( 16 + 9 ) + 4')).toBe('1 2 16 9 + √ * 4 + +');
  });

  it('should return right expression', () => {
    expect(convertToRPN('1 + 2 * √ ( 16 + 9 * 10 ) + 4')).toBe('1 2 16 9 10 * + √ * 4 + +');
  });

  it('should format correctly', () => {
    expect(convertToRPN('- 5 + 10')).toBe('5 - 10 +');
  });
});
