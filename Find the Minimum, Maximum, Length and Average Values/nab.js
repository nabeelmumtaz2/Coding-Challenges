function minMaxLengthAverage(arr) {
  
  return [Math.min(...arr),Math.max(...arr),arr.length,arr.reduce((v, i) => (v + i)) / arr.length];
}