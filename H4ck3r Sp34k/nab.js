//Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
//In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

function hackerSpeak(str) {
	str = str.replace(/\a|e|i|o|s/gi,function(match) {
		return (match=="a")?"4":"" || (match=="e")?"3":"" ||
		       (match=="i")?"1":"" || (match=="o")?"0":"" || 
			     (match=="s")?"5":"" 
		;})
	return str;
}
