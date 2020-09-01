const arrayAnalysis = require('../src/array-analysis')

test('average of array items', () => {
  expect(arrayAnalysis([1, 2, 3, 4])).toEqual({ average: 2.5, min: 1, max: 4, length: 4 })
})