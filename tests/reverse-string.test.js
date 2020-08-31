const reverseString = require('../src/reverse-string');

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
