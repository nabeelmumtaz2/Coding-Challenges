//Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.
//"abcd" ➞ "A-Bb-Ccc-Dddd"

//"RqaEzty" ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

//"cwAt" ➞ "C-Ww-Aaa-Tttt"

//Capitalize the first letter of each set.
//All tests contain valid strings with alphabetic characters (a-z, A-Z).

function accum(str) {
	let arry=str.split('');
	let result="";
	for(let i=0;i<arry.length;i++){
	  result+=arry[i].toUpperCase();
		result+=arry[i].repeat(i).toLowerCase() + '-';
	}
  return result.slice(0, -1);
}


Test.assertEquals(accum("abcd"), "A-Bb-Ccc-Dddd");
Test.assertEquals(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
Test.assertEquals(accum("cwAt"), "C-Ww-Aaa-Tttt");
Test.assertEquals(accum("VgyCdnQa"), "V-Gg-Yyy-Cccc-Ddddd-Nnnnnn-Qqqqqqq-Aaaaaaaa");
Test.assertEquals(accum("nRBSdNOsMl"), "N-Rr-Bbb-Ssss-Ddddd-Nnnnnn-Ooooooo-Ssssssss-Mmmmmmmmm-Llllllllll");
Test.assertEquals(accum("nuE"), "N-Uu-Eee");
Test.assertEquals(accum("RlDrhZuQaqsoHEfziByObtMxkFCJVe"), "R-Ll-Ddd-Rrrr-Hhhhh-Zzzzzz-Uuuuuuu-Qqqqqqqq-Aaaaaaaaa-Qqqqqqqqqq-Sssssssssss-Oooooooooooo-Hhhhhhhhhhhhh-Eeeeeeeeeeeeee-Fffffffffffffff-Zzzzzzzzzzzzzzzz-Iiiiiiiiiiiiiiiii-Bbbbbbbbbbbbbbbbbb-Yyyyyyyyyyyyyyyyyyy-Oooooooooooooooooooo-Bbbbbbbbbbbbbbbbbbbbb-Tttttttttttttttttttttt-Mmmmmmmmmmmmmmmmmmmmmmm-Xxxxxxxxxxxxxxxxxxxxxxxx-Kkkkkkkkkkkkkkkkkkkkkkkkk-Ffffffffffffffffffffffffff-Ccccccccccccccccccccccccccc-Jjjjjjjjjjjjjjjjjjjjjjjjjjjj-Vvvvvvvvvvvvvvvvvvvvvvvvvvvvv-Eeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
Test.assertEquals(accum("EXpzPFx"), "E-Xx-Ppp-Zzzz-Ppppp-Ffffff-Xxxxxxx");
Test.assertEquals(accum("NU"), "N-Uu");
Test.assertEquals(accum("g"), "G");
