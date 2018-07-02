function indexOfCaps(str) {
	var arry=str.split('');
 var letter = /^[A-Za-z]+$/;
	var result=[];
	for(let i=0;i<arry.length;i++){
		if(arry[i]==arry[i].toUpperCase() && arry[i].match(letter)){
			result.push(arry.indexOf(arry[i]));
		}
	}
	return result;
}