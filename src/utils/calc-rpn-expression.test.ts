import { calcRpnExpression } from './calc-rpn-expression';

describe('calc rpn expression and return finish result', () => {
  it('should return correct result', () => {
    expect(calcRpnExpression('1 2 16 9 10 * + √ * 4 + +')).toBe(25.591260281974);
  });
});
