const capitalize = require('../src/capitalize');

test('capitalizes the first character in the string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
