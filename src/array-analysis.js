const arrayAnalysis = (arr) => {
  const { length } = arr;
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average, min, max, length,
  };
};

module.exports = arrayAnalysis;