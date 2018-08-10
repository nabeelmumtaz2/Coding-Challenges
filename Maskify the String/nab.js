//Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

//Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

function maskify(str) {
	let result=[];
	let lastFour=str.substr(str.length - 4);
	if(str.length > 4){
	 for(let i=0;i<str.length-4;i++){
		 result.push('#');
	 }
	 return result.join('') + lastFour;
	}else{
		return str;
	}
}
