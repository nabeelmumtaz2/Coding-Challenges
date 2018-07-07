function findShortestWords(str) {
var words=str.replace(/[.;,?%]/, "");
  var strLength=[];
	var strResult=[];
	var res= words.split(" ");
	for(i=0;i < res.length;i++){
		strLength.push(res[i].length);
	}
	var shortestWord=Math.min(...strLength);
	for(i=0;i < res.length;i++){
		if(res[i].length==shortestWord){
			strResult.push(res[i].toLowerCase().replace(/[0-9]/, ""));
		}
	}
	strResult = strResult.filter(function(n){ return n != 0 }); 
	return strResult.sort(); 
}
