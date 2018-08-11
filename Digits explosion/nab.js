function explode(s) {

var arry=s.split('');
var result='';
for(var i=0;i<arry.length;i++){
 result+=arry[i].toString().repeat(arry[i]);
}
  return result;
}
