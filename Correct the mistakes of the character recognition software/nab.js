function correct(string)
{
	var newstr = string.replace(/5/ig, 'S').replace(/0/ig, 'O').replace(/1/ig, 'I');

  return newstr;
}
