Create a function that takes a string and returns a new string with its first and last characters swapped

function flipEndChars(str) {
	return str.slice(-1) + str.slice(1,-1) + str.charAt(0);
}
