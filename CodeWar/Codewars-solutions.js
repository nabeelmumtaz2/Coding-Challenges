//Break camelCase

function solution(string) {
  
  return string.split(/(?=[A-Z])/).join(' '); 
}

//Array.diff

function array_diff(a, b) {
let result=[];
for(let i=0;i<a.length;i++){
   if(b.indexOf(a[i])){
     result.push(a[i]);
   }
  }
  return result;
}

//Digits explosion


function explode(s) {

var arry=s.split('');
var result='';
for(var i=0;i<arry.length;i++){
 result+=arry[i].toString().repeat(arry[i]);
}
  return result;
}

//Kebabize

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

//Find The Parity Outlier

function findOutlier(integers){
  let odd=[];
  let even=[];
  
  for(let i=0;i<integers.length;i++){
   if(integers[i] % 2==0){
     even.push(integers[i]);
   }else{
     odd.push(integers[i]);
   }
  }
  if(even.length==1){
     return parseInt(even.join(""));
  }else{
     return parseInt(odd.join(""));
  }
}

//IQ Test

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

//Sum of Digits / Digital Root

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

//Correct the mistakes of the character recognition software

function correct(string)
{
	var newstr = string.replace(/5/ig, 'S').replace(/0/ig, 'O').replace(/1/ig, 'I');

  return newstr;
}

//Remove the minimum

function removeSmallest(numbers) {
  
  var minItem= Math.min.apply(null, numbers);
  var minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((e,index) => {return e != minItem || index != minIndex});

}

//Sort array by string length

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

//Make a function that does arithmetic!

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

//Round to the next multiple of 5.

function roundToNext5(n){
	
  return Math.ceil( n/5) *5;
}

//Shortest Word

function findShort($str){

$res=explode(" ",$str);
  
$lengths = array_map('strlen', $res);
  
  return min($lengths);
}

function findShort(s){
var words = s.split(" ");
var lng=[];
for(var i=0;i < words.length;i++){
    lng.push(words[i].length);
  }
  return Math.min(...lng);
}                                                                

//BetaThinkful - String Drills: Hello, World

function hello(name) {
  return 'Hello, '+ name;
}


function swap(a,b){

  return [b,a]
}

//Who am I?

function checkType(value) {  
  return typeof value;
}

//Create Phone Number

function createPhoneNumber(numbers){
  
  let partOne=numbers.slice(0, 3).join("");
  let partTwo=numbers.slice(3, 6).join("");
  let partThree=numbers.slice(6, 10).join("");
  var result="("+partOne+")"+" "+partTwo+"-"+partThree;
  return  result;
}

//Remove String Spaces

function no_space(string $s): string {
  return  str_replace(" ","",$s);
}

//String repeat

function repeatStr($n, $str)
{
  return str_repeat($str,$n);
}

//Multiply

public class CustomMath {
    public static int multiply(int a, int b) {
        return a * b;
    }
}
