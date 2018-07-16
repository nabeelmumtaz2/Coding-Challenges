//Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

function countAll(str) {
	str=str.replace(/\s/g, '');
	var res = str.split("");
	var obj={LETTERS:  0, DIGITS: 0}
	res.forEach(function(element) {
  if(isNaN(element)){
		obj.LETTERS+=element.length;
	}else{
		obj.DIGITS+=element.length;
	}
});
	return obj;
}
