//A museum wants to get rid of some exhibitions. Vanya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

//Create a function that takes an array of integers and removes the smallest value.

//Don't change the order of the left over items.
//If you get an empty array, return an empty array: [] ➞ [].
//If there are multiple items with the same value, remove item with lower index (3rd example).


function removeSmallest(arr) {
	var smallElement= Math.min(...arr);
	var result=[];
	var position=arr.indexOf(smallElement);
	for(var i=0;i<arr.length;i++){
		if(i==position){
		  continue;
		}else{
			result.push(arr[i]);
		}
	}
	return result;
}
