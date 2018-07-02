function removeDups(arr) {
	for(let i=0;i<arr.length;i++){
		for(let r=i+1;r<arr.length;r++){
		if(arr[i]==arr[r]){
			delete arr[r];
		 }
  	  }
	}
	arr = arr.filter(function(n){ return n != undefined }); 
	return arr;
}