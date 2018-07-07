//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. 
//Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.
function validatePIN(pin) {
	if(pin.length!==0 && pin!=null && is_numeric(pin) && pin.length===4 || pin.length===6){
		return true;
	}else{
		return false;
	}
}
function is_numeric(str){
    return /^\d+$/.test(str);
}
//Notes
//Some test cases contain special characters.
//Empty strings must return false.