function getAbsSum($arr) {
  $num=0;
	for($i=0;$i<count($arr);$i++){
		$num=$num + abs($arr[$i]);
	}
	return $num;
}
