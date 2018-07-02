function sumTwoSmallestNums(arr) {

var positiveNumbers = arr.filter(function(number){ 
       return number>=0;
})
var sortNum =  positiveNumbers.sort(function(a,b) {
  return a-b 
});
return sortNum[0] +sortNum[1];
}