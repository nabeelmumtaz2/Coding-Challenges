function noOdds($arr) {
	return array_filter($arr,"even");
}
function even($var){
  return($var % 2==0 );
}
