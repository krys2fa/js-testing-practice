const arrayAnalysis = (arr) => {
  length = arr.length
  average = arr.reduce((a,b) => a + b, 0)/ arr.length;
  min = Math.min(...arr)
  max = Math.max(...arr)
  
  return { average, min, max, length}
}

module.exports = arrayAnalysis