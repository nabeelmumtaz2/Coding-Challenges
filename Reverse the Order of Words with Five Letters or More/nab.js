function reverse(str) {
	let arry=str.split(' ');
	let result=[];
	for(let i=0;i<arry.length;i++){
		if(arry[i].length >= 5){
			result.push(arry[i].split("").reverse().join(""));
		}else{
			result.push(arry[i]);
		}
	}
	return result.join(' ');
}