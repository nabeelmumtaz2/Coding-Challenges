
//An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
//Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(str) {
	let count=0;
	let arry=str.split(''); //split string into array of characters 
	
	for(let i=0;i<arry.length;i++){  //loop through elements comparing each with another.
		for(let r=i+1;r<arry.length;r++){
			if(arry[i].toLowerCase()==arry[r].toLowerCase()){ // If found any matching repeating elements in the array, then increase the counter to +1.
				count++;
			}
		}
	}
	if(count >= 1){ // If the counter is greater then or equal one, that means the word is Isogram.
		return false;
	}else{
		return true;
	}
}


Test.assertEquals(isIsogram("Algorism"), true)
Test.assertEquals(isIsogram("PasSword"), false)
Test.assertEquals(isIsogram("Dermatoglyphics"), true)
Test.assertEquals(isIsogram("Cat"), true)
Test.assertEquals(isIsogram("Filmography"), true)
Test.assertEquals(isIsogram("Consecutive"), false)
Test.assertEquals(isIsogram("Bankruptcies"), true)
Test.assertEquals(isIsogram("Unforgivable"), true)
Test.assertEquals(isIsogram("Unpredictably"), true)
Test.assertEquals(isIsogram("Moose"), false)

//Notes
//Ignore letter case (should not be case sensitive).
//All test cases contain valid one word strings.
