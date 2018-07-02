function letterCheck(arr) {
	let ch=arr[1].toString().split('');
	let result=[];
	for(let i=0;i<ch.length;i++){
		if(arr[0].toLowerCase().includes(ch[i].toLowerCase())){
			result.push(true);
		}else{
			result.push(false);
		}
	}
	return result.every(allTrue);
}
function allTrue(currentValue) {
  return currentValue==true;
}