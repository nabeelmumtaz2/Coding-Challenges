//Your task is to drive your car from 1 to 60 Kilometers per hour by printing a pattern.

//A hyphen represents the speed of cars.

//one hyphen is counted as 1 kph.

function Go(num) {
	let result = '';
	for(i=1; i<=num; i++){
		result += '-';
	}
	return result;
}

//Note: You have provided with an integer of numbers from 1 to 60.

//Your input should return as an string type.

Test.assertEquals(Go(1),"-")
Test.assertEquals(Go(2),"--")
Test.assertEquals(Go(3),"---")
Test.assertEquals(Go(4),"----")
Test.assertEquals(Go(5),"-----")
Test.assertEquals(Go(6),"------")
Test.assertEquals(Go(7),"-------")
Test.assertEquals(Go(8),"--------")
Test.assertEquals(Go(9),"---------")
Test.assertEquals(Go(10),"----------")
Test.assertEquals(Go(11),"-----------")
Test.assertEquals(Go(12),"------------")
Test.assertEquals(Go(13),"-------------")
Test.assertEquals(Go(14),"--------------")
Test.assertEquals(Go(15),"---------------")
Test.assertEquals(Go(16),"----------------")
Test.assertEquals(Go(17),"-----------------")
Test.assertEquals(Go(18),"------------------")
Test.assertEquals(Go(19),"-------------------")
Test.assertEquals(Go(20),"--------------------")
Test.assertEquals(Go(21),"---------------------")
Test.assertEquals(Go(22),"----------------------")
Test.assertEquals(Go(23),"-----------------------")
Test.assertEquals(Go(24),"------------------------")
Test.assertEquals(Go(25),"-------------------------")
Test.assertEquals(Go(26),"--------------------------")
Test.assertEquals(Go(27),"---------------------------")
Test.assertEquals(Go(28),"----------------------------")
Test.assertEquals(Go(29),"-----------------------------")
Test.assertEquals(Go(30),"------------------------------")
Test.assertEquals(Go(31),"-------------------------------")
Test.assertEquals(Go(32),"--------------------------------")
Test.assertEquals(Go(33),"---------------------------------")
Test.assertEquals(Go(34),"----------------------------------")
Test.assertEquals(Go(35),"-----------------------------------")
Test.assertEquals(Go(36),"------------------------------------")
Test.assertEquals(Go(37),"-------------------------------------")
Test.assertEquals(Go(38),"--------------------------------------")
Test.assertEquals(Go(39),"---------------------------------------")
Test.assertEquals(Go(40),"----------------------------------------")
Test.assertEquals(Go(41),"-----------------------------------------")
Test.assertEquals(Go(42),"------------------------------------------")
Test.assertEquals(Go(43),"-------------------------------------------")
Test.assertEquals(Go(44),"--------------------------------------------")
Test.assertEquals(Go(45),"---------------------------------------------")
Test.assertEquals(Go(46),"----------------------------------------------")
Test.assertEquals(Go(47),"-----------------------------------------------")
Test.assertEquals(Go(48),"------------------------------------------------")
Test.assertEquals(Go(49),"-------------------------------------------------")
Test.assertEquals(Go(50),"--------------------------------------------------")
Test.assertEquals(Go(51),"---------------------------------------------------")
Test.assertEquals(Go(52),"----------------------------------------------------")
Test.assertEquals(Go(53),"-----------------------------------------------------")
Test.assertEquals(Go(54),"------------------------------------------------------")
Test.assertEquals(Go(55),"-------------------------------------------------------")
Test.assertEquals(Go(56),"--------------------------------------------------------")
Test.assertEquals(Go(57),"---------------------------------------------------------")
Test.assertEquals(Go(58),"----------------------------------------------------------")
Test.assertEquals(Go(59),"-----------------------------------------------------------")
Test.assertEquals(Go(60),"------------------------------------------------------------")
