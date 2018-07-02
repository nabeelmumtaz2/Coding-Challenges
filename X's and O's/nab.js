function XO(str) {
	var xCount=0;
	var oCount=0;
	const x='x';
	const o='o';
	var arry=str.split('');
	for(let i=0;i<arry.length;i++){
		if(arry[i].toLowerCase()==x){
			xCount++;
		}if(arry[i].toLowerCase()==o){
			oCount++;
		}
	}
	if(xCount==oCount){
		return true;
	}else{
		return false;
	}
}