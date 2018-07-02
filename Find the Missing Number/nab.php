function missingNums($arr) {
$numbers = range(1,10);
$answer;
$result=array_diff($numbers,$arr);
  foreach($result as $value){
       $answer=$value;
 }
return $answer;
}