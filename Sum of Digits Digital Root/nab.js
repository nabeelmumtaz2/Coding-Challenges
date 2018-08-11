
function digital_root(n) {
  
  let part1 =n.toString().split("");
  let result=0;
  for(let i=0;i<part1.length;i++){
   result+=parseInt(part1[i]);
   if(result.toString().length > 1){
   let result1=result.toString().split("");
   result=0;
   for(let i=0;i<result1.length;i++){
   result=result + parseInt(result1[i]);
   
     }
    }
  }
  return result;
}
