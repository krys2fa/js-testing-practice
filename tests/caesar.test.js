const caesarCipher = require('../src/caesar');

test('lowercase string codes with caesar cipher', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('uppercase string codes with caesar cipher', () => {
  expect(caesarCipher('I am learning JS', 5)).toBe('N fr qjfwsnsl OX');
});

test('wrapping string codes with caesar cipher', () => {
  expect(caesarCipher('xyz', 5)).toBe('cde');
});