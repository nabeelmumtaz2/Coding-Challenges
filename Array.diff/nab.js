function array_diff(a, b) {
let result=[];
for(let i=0;i<a.length;i++){
   if(b.indexOf(a[i])){
     result.push(a[i]);
   }
  }
  return result;
}
