//Create a function that takes three arguments (x, y, z) and returns an array containing subarrays 
//(e.g. [[], [], []]), each of a certain number of items, all set to either a string or an integer.


function matrix(x, y, z) {
	let yz=[];
	let result=[];
		for(let r=1;r<=y;r++){ 
			// y argument Number of items contained within each subarray(s).
            // z argument: Item contained within each subarray(s).
					yz.push(z);
		}
    for(let i=1;i<=x;i++){ // x Number of subarrays contained within the main array.
		    result.push(yz);
	}
	return result;
}
//Notes

    //The first two arguments will always be valid integers.
    //The third is either a string or an integer.
    //You can expect valid input for all test cases.
Test.assertSimilar(matrix(3, 4, 0), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
Test.assertSimilar(matrix(2, 3, "#"), [['#', '#', '#'], ['#', '#', '#']]);
Test.assertSimilar(matrix(2, 3, -4), [[-4, -4, -4], [-4, -4, -4]]);
Test.assertSimilar(matrix(1, 2, 0), [[0, 0]]);
