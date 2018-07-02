function firstNonRepeatedCharacter(str) {
	 let arry=str.split('');
	let temp=[];
	let result;
	 array = arry.filter(function(str) {
    return /\S/.test(str);
});
	for(let i=0;i<array.length;i++){
		for(let r=i+1;r<array.length;r++){
			if(array[i]==array[r]){
				temp.push(array[i]);
			}
		}
	}
	for(let i=0;i<array.length;i++){
		if(!temp.includes(array[i])){
			 result= array[i];
			break;
		}
	}
	return (result)==null ? false : result;
}