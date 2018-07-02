function makeTitle(str) {
	var arry=str.split(' ');
	var temp=[];
	for(let i=0;i < arry.length;i++){
		temp.push(arry[i].toString().charAt(0).toUpperCase() + arry[i].toString().slice(1));
	}
	return temp.join(' ');
}