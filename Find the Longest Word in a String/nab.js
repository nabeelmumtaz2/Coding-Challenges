function findLongestWordLength(str) {
  
   var arry=str.split(' ');
  
   arry=arry.map(x => x.length);
 
   return Math.max(...arry);

}


findLongestWordLength("The quick brown fox jumped over the lazy dog");