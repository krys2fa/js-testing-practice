const arrayAnalysis = require('../src/array-analysis');

test('analysis of [1, 2, 3, 4])', () => {
  expect(arrayAnalysis([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test('analysis of empty array', () => {
  expect(arrayAnalysis([])).toEqual({
    average: NaN, min: Infinity, max: -Infinity, length: 0,
  });
});

test('analysis of [2, 4, 6, 8, 10]', () => {
  expect(arrayAnalysis([2, 4, 6, 8, 10])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});
