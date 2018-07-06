
// Create a function that takes an array of numbers and returns
// an array where each number is the sum of itself + all previous numbers in the array.
// Set initial value for empty array.

function cumulativeSum(arr) {
  var new_array = [];
  arr.reduce(function(a,b,i) { return new_array[i] = a + b; } , 0);
	return new_array; 
}