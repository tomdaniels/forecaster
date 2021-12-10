import pickFrom from '../pick-from';

describe('pick-from.js', () => {
  describe('pickFrom()', () => {
    const testObject = {
      one: 1,
      two: 2,
      three: '3',
      four: true,
    };

    const readFromTestObject = pickFrom(testObject);

    it('is a reusable/partially applied function', () => {
      expect(typeof readFromTestObject === 'function').toBe(true);
    });

    it('returns a given path for the wrapped object', () => {
      Object.keys(testObject).forEach(key => {
        expect(readFromTestObject(key)).toEqual(testObject[key]);
      });
    });
  });
});
