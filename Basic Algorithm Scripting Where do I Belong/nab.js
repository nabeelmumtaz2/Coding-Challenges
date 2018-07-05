function getIndexToIns(arr, num) {

  arr=arr.sort(function(a, b){return a + b});

  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]-num < 0){
      count=count + 1;
    }
  }
  return count;
}

getIndexToIns([40, 60], 50);