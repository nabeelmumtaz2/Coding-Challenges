//Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:

    //Array
    //Object
    //String
    //Number
    //Boolean
    //Null
    //Undefined
    //Date
    
function dataType(value) {
    
	const nullVal="null";
	const arrayVal="array";
	const dateVal="date";
	const undefinedVal="undefined";
 
	if(value==null && typeof value=="object"){
		   return nullVal;
       
	}else if(Array.isArray(value)){
		   return arrayVal;
       
	}else if(value instanceof Date){
		   return dateVal;
       
	}else if(typeof value=="undefined"){
		   return undefinedVal;
       
	}else{
		   return typeof value;
	}
}

Test.assertEquals(dataType([1, 2, 3, 4, 5]), "array")
Test.assertEquals(dataType({key: "value"}), "object")
Test.assertEquals(dataType("This is an example string..."), "string")
Test.assertEquals(dataType(2017), "number")
Test.assertEquals(dataType(true), "boolean")
Test.assertEquals(dataType(null), "null")
Test.assertEquals(dataType(undefined), "undefined")
Test.assertEquals(dataType(new Date()), "date")
