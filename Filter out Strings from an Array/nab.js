function filterArray(arr) {
  
  return arr.filter(isNumber);
}

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}