import { calcRpnExpression } from './calc-rpn-expression';

describe('calc rpn expression and return finish result', () => {
  it('should return correct sum result1', () => {
    expect(calcRpnExpression('1 2 + 3 +')).toBe(6);
  });

  it('should return correct subtraction result2', () => {
    expect(calcRpnExpression('10 4 - 3 -')).toBe(3);
  });

  it('should return correct division result3', () => {
    expect(calcRpnExpression('32 2 / 4 /')).toBe(4);
  });

  it('should return correct multiplication result4', () => {
    expect(calcRpnExpression('2 3 * 4 *')).toBe(24);
  });

  it('should return correct percentage  result5', () => {
    expect(calcRpnExpression('200 20 % -')).toBe(160);
  });

  it('should return correct sqrt result6', () => {
    expect(calcRpnExpression('16 9 + √')).toBe(5);
  });

  it('should return correct result7', () => {
    expect(calcRpnExpression('1 2 16 9 10 * + √ * 4 + +')).toBe(25.591260281974);
  });

  it('should return correct result8', () => {
    expect(calcRpnExpression('4 3 * 8 2 - / 4 8 3 - * 5 20 + √ / +')).toBe(6);
  });

  it('should return correct result8', () => {
    expect(calcRpnExpression('5 0 /')).toBe(Infinity);
  });
});
