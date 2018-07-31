//Create a function that takes a string (the string to truncate) and a number (the maximum length of the truncated string) as arguments and returns the truncated string at the given length.
//To "truncate" means "to shorten by cutting off the top or end".
//If a word is trucated in the middle, discard it in the output (see 2nd example above).
//("Lorem ipsum dolor sit amet.", 11) ➞ "Lorem ipsum"

//("Lorem ipsum dolor sit amet.", 16) ➞ "Lorem ipsum"

//("Lorem ipsum dolor sit amet.", 17) ➞ "Lorem ipsum dolor"

function truncate(string, length) {
	let words=string.split(' ');
  let result=string.substring(0, length).split(' ');
	let notMiddle=[];
	for(let i=0;i<words.length;i++){
		if(result.includes(words[i])){
			notMiddle.push(words[i]);
		}else{
			break;
		}
	}
	return notMiddle.join(' ');
}
