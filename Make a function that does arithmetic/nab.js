
function arithmetic(a, b, operator){
  var result;
  switch(operator) {
    case "add":
        result= (a + b);
        break;
    case "subtract":
        result = (a - b);
        break;
    case "multiply":
        result = (a * b);
        break;
    case "divide":
        result = (a / b);
        break;
   } 
   return result;
}
