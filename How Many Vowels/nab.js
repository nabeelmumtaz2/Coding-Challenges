function countVowels(str) {
	var vowels= ["A", "E", "I", "O", "U"];
	var result=[];
	for(i=0;i<vowels.length;i++){
		for(r=0;r< str.length;r++){
			if(str[r].toLowerCase()==vowels[i].toLowerCase()){
				 result.push(str[r]);
	   }
		}
	}
	return result.length;
}