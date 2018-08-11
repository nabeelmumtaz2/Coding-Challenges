function iqTest(numbers){
  var num=numbers.split(" ");
  var odd=[];
  var even=[];
  
  for(let i=0;i<num.length;i++){
   if( num[i] % 2){
    //even
    even.push(num.indexOf(num[i]));
    }else{
    odd.push(num.indexOf(num[i]));
   }
  }
   if(odd.length==1){
   
   return odd[0]+1;
	   
   }else{
	   
   return even[0]+1;
   }
}
