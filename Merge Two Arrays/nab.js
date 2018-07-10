//Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
//Rules

    //The arrays may be of different lengths, with at least one character / digit.
    //The first array will contain string characters (lowercase, a-z),
    //The second array will contain integers (all positive).
   
   
 function mergeArrays(a, b) {
	 let totalLength=[a.length, b.length];
	 let result=[];
	for(let i=0;i < Math.max(...totalLength);i++){
		 result.push(a[i],b[i]);
	}
	return result.filter(function(n){ return n != undefined }); 
}
    
    
    
    
    
Test.assertSimilar(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5])
Test.assertSimilar(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]), [1, "a", 2, "b", 3, "c", "d", "e", "f"])
Test.assertSimilar(mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8]), ["f", 5, "d", 3, "w", 7, "t", 8])
Test.assertSimilar(mergeArrays([4, 54, 7, 87], ["t", "d", "t"]), [4, "t", 54, "d", 7, "t", 87])
Test.assertSimilar(mergeArrays(["c"], [3]), [ "c", 3 ])
Test.assertSimilar(mergeArrays([4, 3, 2, 1], ["r", "d"]), [ 4, "r", 3, "d", 2, 1 ])
Test.assertSimilar(mergeArrays(["u", "k", "c"], [2, 8, 30]), ["u", 2, "k", 8, "c", 30])
Test.assertSimilar(mergeArrays(["e"], [1, 2, 3, 4, 5, 6, 7]), ["e", 1, 2, 3, 4, 5, 6, 7])
Test.assertSimilar(mergeArrays([1, 2, 3, 4, 5, 6, 7], ["e"]), [1, "e", 2, 3, 4, 5, 6, 7])
Test.assertSimilar(mergeArrays([123, 456], ["c", "b", "a"]), [123, "c", 456, "b", "a"])
