function uniqueSort(arr) {
	let dup = [...new Set(arr)];
	dup.sort(function(a, b) {
     return a - b;
  });
	return dup;
}