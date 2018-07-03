function reverse(bool) {
	
	if(typeof(bool) === "boolean" && bool==true){
		return false;
	}else if(typeof(bool) === "boolean" && bool==false){
		return true;
  }else{
		return "boolean expected";
	}
}