import { NBSP_JS } from './constants/nbsp.constant';
import { splitDigits } from './split-digits';

describe('splitDigits', () => {
  it('should handle positive numbers with less than or equal to three digits', () => {
    expect(splitDigits('123')).toBe('123');
  });

  it('should handle positive numbers with more than three digits', () => {
    expect(splitDigits('1234')).toBe(`1${NBSP_JS}234`);
  });

  it('should handle negative numbers with less than or equal to three digits', () => {
    expect(splitDigits('-123')).toBe('-123');
  });

  it('should handle negative numbers with more than three digits', () => {
    expect(splitDigits('-1234')).toBe(`-1${NBSP_JS}234`);
  });

  it('should handle zero', () => {
    expect(splitDigits('0')).toBe('0');
  });

  it('should handle empty string', () => {
    expect(splitDigits('')).toBe('');
  });

  it('should handle string with only a negative sign', () => {
    expect(splitDigits('-')).toBe('-');
  });
});
