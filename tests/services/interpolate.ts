import { interpolate } from '../../src/services';

const key = 'Some text {0}';

describe('interpolate', () => {
  it('should return exprcted value if params', () => {
    expect(interpolate(key, [0])).toEqual('Some text 0');
  });

  it('should return exprcted value if no params', () => {
    expect(interpolate(key)).toEqual(key);
  });

  it('should return exprcted value if empty params', () => {
    expect(interpolate(key, [])).toEqual(key);
  });
});
