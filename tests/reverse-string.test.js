const reverseString = require('../src/reverse-string');

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string(Javascript)', () => {
  expect(reverseString('Javascript')).toBe('tpircsavaJ');
});

test('gives the reverse of string(Microverse)', () => {
  expect(reverseString('Microverse')).toBe('esrevorciM');
});
