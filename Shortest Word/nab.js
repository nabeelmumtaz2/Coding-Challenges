function findShort($str){

$res=explode(" ",$str);
  
$lengths = array_map('strlen', $res);
  
  return min($lengths);
}
