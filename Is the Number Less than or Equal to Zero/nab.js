function lessThanOrEqualToZero(num) {
	if(num <=0){
		return true;
	}else{
		return false;
	}
}

Test.assertEquals(lessThanOrEqualToZero(5), false);
Test.assertEquals(lessThanOrEqualToZero(0), true);
Test.assertEquals(lessThanOrEqualToZero(-5), true);
Test.assertEquals(lessThanOrEqualToZero(1), false);
Test.assertEquals(lessThanOrEqualToZero(2), false);
Test.assertEquals(lessThanOrEqualToZero(10000), false);
Test.assertEquals(lessThanOrEqualToZero(0.5), false);
