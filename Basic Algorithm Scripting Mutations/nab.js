function mutation(arr) {
  let x=[]
  let secondArry=arr[1].split('');
  for(let i=0;i<secondArry.length;i++){
    if(arr[0].toLowerCase().includes(secondArry[i].toLowerCase())){
     x.push(true);
    }else{
     x.push(false);
    }
  }
  return x.every(isTrue);
}
function isTrue(currentValue) {
  return currentValue ==true;
}
mutation(["hello", "hey"]);