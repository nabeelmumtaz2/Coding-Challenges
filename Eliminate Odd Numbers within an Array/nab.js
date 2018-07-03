function noOdds(arr) {
 return	arr.filter(isOdds);
}
function isOdds(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj) &&  obj % 2 == 0;
}