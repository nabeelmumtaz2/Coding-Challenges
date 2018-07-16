//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  var result=[];
  result.push(Math.min(...arr),Math.max(...arr));
  return result;
}
