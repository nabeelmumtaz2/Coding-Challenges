function concat(arr1, arr2) {
	var arry=[];
	for(let i=0;i<arr1.length;i++){
		arry.push(arr1[i]);
	}
	for(let i=0;i<arr2.length;i++){
		arry.push(arr2[i]);
	}
	return arry;
}
