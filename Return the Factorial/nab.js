//Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

function factorial(int) {
	var ans=1;
	for(let i=1;i <=int;i++){
		  ans=ans * i;
	}
	return ans;
}

Test.assertEquals(factorial(2), 2);
Test.assertEquals(factorial(6), 720);
Test.assertEquals(factorial(3), 6);
Test.assertEquals(factorial(12), 479001600);
Test.assertEquals(factorial(5), 120);
