function uniqueInOrder(sequence) {
	if(typeof sequence=="string"){
	 var arry=sequence.split('');
	}else{
		arry=sequence;
	}
	for(let i=0;i<arry.length;i++){
		if(arry[i]==arry[i+1]){
			 delete arry[i];
	  }
	}
	return arry.filter(function(n){ return n != undefined }); 
}