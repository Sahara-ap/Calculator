import { NBSP_JS } from './constants/nbsp.constant';
import { formatToNumberWithSpaces } from './format-to-number-with-spaces';

describe('formatToNumberWithSpaces', () => {
  it('should handle integer values', () => {
    expect(formatToNumberWithSpaces(123456)).toBe(`123${NBSP_JS}456`);
  });

  it('should handle negative integer values', () => {
    expect(formatToNumberWithSpaces(-123456)).toBe(`-123${NBSP_JS}456`);
  });

  it('should handle zero', () => {
    expect(formatToNumberWithSpaces(0)).toBe('0');
  });

  it('should handle string values', () => {
    expect(formatToNumberWithSpaces('123456')).toBe(`123${NBSP_JS}456`);
  });

  it('should handle values with decimal values', () => {
    expect(formatToNumberWithSpaces(123456.789)).toBe(`123${NBSP_JS}456.789`);
  });
});
