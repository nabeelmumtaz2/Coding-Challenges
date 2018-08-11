function sortByLength (array) {
let arrayLength=[];
let result=[];
for(var i=0;i < array.length;i++){
  arrayLength.push(array[i].length);

}
arrayLength.sort(function(a, b){return a-b});
for(var i=0;i < arrayLength.length;i++){
for(var r=0;r < array.length;r++){
  if(arrayLength[i]==array[r].length){
  result.push(array[r]);
  }
 }
}
return result;
};
