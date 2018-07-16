//Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.
//There will be exactly one space between the first and last name.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

function nameShuffle($str) {
	
	$name=explode(" ",$str);
	
  return $name[1] . " " . $name[0];
}
