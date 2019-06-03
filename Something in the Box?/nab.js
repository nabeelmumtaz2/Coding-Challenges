function inBox(arr) {
	return arr.toString().includes("*");
}
//Create a function that returns true if an asterisk * is inside a box.

inBox([
  "###",
  "#*#",
  "###"
]) ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) ➞ true

inBox([
  "####",
  "#  #",
  "#  #",
  "####"
]) ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) ➞ 
