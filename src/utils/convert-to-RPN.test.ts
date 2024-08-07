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
    expect(convertToRPN('- 5 + 10')).toBe('5 - 10 +');
  });


  it('should return right sum expression1', () => {
    expect(convertToRPN('1 + 2 + 3')).toBe('1 2 + 3 +');
  });
  it('should return right subtraction expression2', () => {
    expect(convertToRPN('10 - 4 - 3')).toBe('10 4 - 3 -');
  });
  it('should return right division expression3', () => {
    expect(convertToRPN('32 / 2 / 4')).toBe('32 2 / 4 /');
  });
  it('should return right multiply expression4', () => {
    expect(convertToRPN('2 * 3 * 4')).toBe('2 3 * 4 *');
  });
  it('should return right percentage expression5', () => {
    expect(convertToRPN('200 - 20 %')).toBe('200 20 % -');
  });
  it('should return right sqrt expression6', () => {
    expect(convertToRPN('√ ( 16 + 9 )')).toBe('16 9 + √');
  });
  it('should return right expression7', () => {
    expect(convertToRPN('1 + 2 * √ ( 16 + 9 * 10 ) + 4')).toBe('1 2 16 9 10 * + √ * 4 + +');
  });
  it('should return right expression8', () => {
    expect(convertToRPN('( 4 * 3 ) / ( 8 - 2 ) + 4 * ( 8 - 3 ) / √ ( 5 + 20 )')).toBe('4 3 * 8 2 - / 4 8 3 - * 5 20 + √ / +');
  });
});
