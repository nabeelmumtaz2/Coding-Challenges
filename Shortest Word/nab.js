function findShort(s){
var words = s.split(" ");
var lng=[];
for(var i=0;i < words.length;i++){
    lng.push(words[i].length);
  }
  return Math.min(...lng);
} 
