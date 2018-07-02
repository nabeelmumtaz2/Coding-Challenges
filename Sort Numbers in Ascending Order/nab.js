function sortNumsAscending(arr) {
  if(arr==undefined || arr==""){
    return [];
  }else{
    return arr.sort(function(a,b){return a - b});
  }
}