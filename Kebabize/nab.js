function kebabize(str) {
  let result="";
  let words=str.split(/(?=[A-Z])/);
  for(let i=0;i<words.length;i++){
   result+=words[i].toLowerCase() +'-';
  }
  result=result.replace(/[^a-z-]+/g, "");
  result=result.replace(/-\s*$/, "");
  result=result.replace(/^-/, '');
  return result;
}
