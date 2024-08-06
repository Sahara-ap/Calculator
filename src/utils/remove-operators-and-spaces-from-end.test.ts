import { removeOperatorsAndSpacesFromEnd } from './remove-operators-and-spaces-from-end';

describe('remove operators and spaces from end of expression', () => {
  it('should remove * from the end of expression', () => {
    expect(removeOperatorsAndSpacesFromEnd('542*')).toBe('542');
  });
  it('should remove * /+% from the end of expression', () => {
    expect(removeOperatorsAndSpacesFromEnd('542* /+')).toBe('542');
  });
  it('should remove spaces "   " from the end of expression', () => {
    expect(removeOperatorsAndSpacesFromEnd('542    ')).toBe('542');
  });
  it('should remove spaces and operators from the end of expression', () => {
    expect(removeOperatorsAndSpacesFromEnd('542  * /')).toBe('542');
  });
  it('should leave "%" at the end of every data', () => {
    expect(removeOperatorsAndSpacesFromEnd('542% */')).toBe('542%');
  });
});
