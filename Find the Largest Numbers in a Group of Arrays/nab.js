function findLargestNums(arr) {
  var result=[];
  for(var i=0;i<arr.length;i++){
    result[i]=Math.max(...arr[i]);  
  }
 return result;
}